"use client";

import { useState } from "react";

const topics = [
  {
    title: "Aptitude",
    points: ["Percentages", "Ratios & Proportions", "Time & Work", "Profit & Loss"],
    icon: "🧮",
    color: "from-blue-500 to-cyan-500",
    modules: [
      { name: "Number Systems", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", description: "Master number theory fundamentals" },
      { name: "Percentage & Profit Loss", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", description: "Learn business mathematics" },
      { name: "Time & Work", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", description: "Solve efficiency problems" },
      { name: "Speed & Distance", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", description: "Master motion problems" }
    ]
  },
  {
    title: "Verbal",
    points: ["Reading Comprehension", "Synonyms/Antonyms", "Sentence Correction"],
    icon: "📚",
    color: "from-green-500 to-emerald-500",
    modules: [
      { name: "Grammar Fundamentals", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", description: "Build strong grammar foundation" },
      { name: "Vocabulary Building", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", description: "Expand your word power" },
      { name: "Reading Comprehension", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", description: "Master text analysis" },
      { name: "Sentence Correction", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", description: "Perfect your writing" }
    ]
  },
  {
    title: "Reasoning",
    points: ["Puzzles", "Syllogisms", "Series", "Directions"],
    icon: "🧩",
    color: "from-purple-500 to-pink-500",
    modules: [
      { name: "Logical Deduction", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", description: "Master logical thinking" },
      { name: "Analytical Reasoning", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", description: "Solve complex puzzles" },
      { name: "Pattern Recognition", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", description: "Identify sequences" },
      { name: "Critical Thinking", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", description: "Develop analytical skills" }
    ]
  },
  {
    title: "Coding",
    points: ["Data Structures", "Algorithms", "Problem Solving", "Code Optimization"],
    icon: "💻",
    color: "from-orange-500 to-red-500",
    modules: [
      { name: "Data Structures", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", description: "Master arrays, lists, trees" },
      { name: "Algorithms", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", description: "Learn sorting and searching" },
      { name: "Problem Solving", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", description: "Crack coding interviews" },
      { name: "Code Optimization", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", description: "Write efficient code" }
    ]
  },
];

export default function SkillQuestPage() {
  const [input, setInput] = useState("");
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAsk() {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/storybot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: input }),
      });
      const data = await res.json();
      setStory(data.story || "");
    } catch (error) {
      setStory("Sorry, I couldn't generate a story right now. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl font-bold gradient-text mb-4">SkillQuest</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Master aptitude, verbal reasoning, and logic building with AI-powered learning and story-based explanations
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {topics.map((t, index) => (
            <div 
              key={t.title} 
              className="card-hover bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${t.color} flex items-center justify-center text-2xl mb-6 animate-pulse`}>
                {t.icon}
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">{t.title}</h3>
              <ul className="space-y-2 mb-6">
                {t.points.map((p) => (
                  <li key={p} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-bounce"></span>
                    {p}
                  </li>
                ))}
              </ul>
              
              {/* Modules Section */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-3">📚 Learning Modules</h4>
                <div className="space-y-2">
                  {t.modules.slice(0, 2).map((module, idx) => (
                    <div key={idx} className="group">
                      <a 
                        href={module.video} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20 transition-all duration-200"
                      >
                        <div className="flex-1">
                          <p className="text-xs font-medium text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {module.name}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {module.description}
                          </p>
                        </div>
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center ml-2 group-hover:scale-110 transition-transform">
                          <span className="text-white text-xs">▶</span>
                        </div>
                      </a>
                    </div>
                  ))}
                  {t.modules.length > 2 && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                      +{t.modules.length - 2} more modules
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Assistant Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl">
                🤖
              </div>
              <h2 className="text-3xl font-bold gradient-text mb-2">AI Learning Assistant</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Ask any concept and get a personalized story-based explanation
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about any concept... (e.g., 'How do percentages work?')"
                  className="flex-1 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-4 bg-transparent focus:border-purple-500 focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 transition-all duration-300"
                  onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
                />
                <button 
                  onClick={handleAsk} 
                  disabled={loading || !input.trim()}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? "Generating..." : "Ask AI"}
                </button>
              </div>

              {story && (
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-700">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm mr-3">
                      📖
                    </div>
                    <h3 className="font-semibold text-purple-800 dark:text-purple-200">StoryBot Response</h3>
                  </div>
                  <p className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 leading-relaxed">
                    {story}
                  </p>
                </div>
              )}

              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  ✨ Powered by advanced AI to make learning engaging and memorable
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">💡 Learning Tips</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Practice Regularly</h4>
                <p className="opacity-90 text-sm">Consistent practice with different problem types builds confidence and speed.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Use Stories</h4>
                <p className="opacity-90 text-sm">Ask the AI to explain concepts through stories for better retention.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

