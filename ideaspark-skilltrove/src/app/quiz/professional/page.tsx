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

  // Enhanced anti-cheat: disable copy/paste, context menu, source view, and more
  useEffect(() => {
    // Prevent right-click context menu
    const onContext = (e: MouseEvent) => e.preventDefault();
    
    // Prevent copy/paste shortcuts
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && ["c", "v", "x", "a", "u", "s"].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
      // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
      if (e.key === "F12" || 
          (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(e.key.toLowerCase()))) {
        e.preventDefault();
      }
      // Prevent Ctrl+U (view source)
      if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
      }
    };
    
    // Prevent drag and drop
    const onDragStart = (e: DragEvent) => e.preventDefault();
    
    // Prevent text selection
    const onSelectStart = (e: Event) => e.preventDefault();
    
    // Prevent print screen
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen") {
        e.preventDefault();
        return false;
      }
    };
    
    // Add all event listeners
    document.addEventListener("contextmenu", onContext);
    document.addEventListener("keydown", onKey);
    document.addEventListener("keyup", onKeyUp);
    document.addEventListener("dragstart", onDragStart);
    document.addEventListener("selectstart", onSelectStart);
    
    // Disable text selection via CSS
    document.body.style.userSelect = "none";
    document.body.style.webkitUserSelect = "none";
    document.body.style.mozUserSelect = "none";
    document.body.style.msUserSelect = "none";
    
    // Disable view source
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
        return false;
      }
    });
    
    return () => {
      document.removeEventListener("contextmenu", onContext);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("keyup", onKeyUp);
      document.removeEventListener("dragstart", onDragStart);
      document.removeEventListener("selectstart", onSelectStart);
      
      // Re-enable text selection
      document.body.style.userSelect = "";
      document.body.style.webkitUserSelect = "";
      document.body.style.mozUserSelect = "";
      document.body.style.msUserSelect = "";
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
        // Reduce time as penalty for switching tabs
        setTimeLeft((t) => Math.max(0, t - 15));
      }
    }
    
    function onBlur() {
      // Reduce time when window loses focus
      setTimeLeft((t) => Math.max(0, t - 10));
    }
    
    function onFocus() {
      // Show warning when returning to quiz
      if (document.hidden) {
        alert("⚠️ Warning: Tab switching detected! Time penalty applied.");
      }
    }
    
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);
    
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
    };
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
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Professional Results Hero Section */}
          <div className="text-center mb-12 animate-fadeInUp">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-5xl animate-scaleIn">
              🎯
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Assessment Complete!
            </h1>
            <p className="text-xl opacity-90 mb-8">Your professional evaluation has been completed successfully.</p>
          </div>

          {/* Professional Score Display */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl mb-8 animate-scaleIn">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Your Professional Score</h2>
              <div className="text-8xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-4 animate-pulse">
                {score}
              </div>
              <div className="text-2xl opacity-80 mb-6">points</div>
              
              {/* Professional Performance Rating */}
              <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full px-6 py-3 text-white font-bold text-lg mb-6">
                {score >= 80 ? "🏆 Expert Level!" : score >= 60 ? "🎯 Advanced!" : score >= 40 ? "💼 Intermediate!" : "📚 Foundation Level!"}
              </div>
            </div>
          </div>

          {/* Professional Action Buttons */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <button 
              onClick={() => router.push("/results")} 
              className="group p-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl text-white font-bold text-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl">📊</span>
                <span>View Detailed Analysis</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </button>
            
            <a
              href={`/api/certificate?name=Professional&score=${score}&role=Professional`}
              className="group p-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl text-white font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl">📜</span>
                <span>Download Certificate</span>
                <span className="group-hover:scale-110 transition-transform duration-300">⬇️</span>
              </div>
            </a>
          </div>

          {/* Additional Professional Actions */}
          <div className="grid md:grid-cols-2 gap-6">
            <button 
              onClick={() => router.push("/leaderboard")} 
              className="group p-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl">🏅</span>
                <span>View Leaderboard</span>
                <span className="group-hover:rotate-12 transition-transform duration-300">📈</span>
              </div>
            </button>
            
            <button 
              onClick={() => router.push("/learn/professional")} 
              className="group p-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl text-white font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl">📚</span>
                <span>Continue Learning</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">🚀</span>
              </div>
            </button>
          </div>

          {/* Professional Success Animation */}
          <div className="fixed inset-0 pointer-events-none">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              >
                {['🎯', '🏆', '💼', '📊', '🚀'][Math.floor(Math.random() * 5)]}
              </div>
            ))}
          </div>
        </div>
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

