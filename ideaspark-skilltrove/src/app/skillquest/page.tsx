"use client";

import { useState } from "react";

const topics = [
  {
    title: "Aptitude",
    points: ["🎯 Number Systems & Operations", "📊 Percentages & Ratios", "📈 Profit & Loss Calculations", "⏰ Time & Work Problems", "📏 Geometry & Mensuration", "🔢 Algebra & Equations"],
    icon: "🧮",
    color: "from-blue-500 to-cyan-500",
    description: "Master quantitative reasoning and mathematical problem-solving skills",
    modules: [
      { 
        name: "Number Systems", 
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
        description: "Master number theory fundamentals and mathematical operations",
        content: [
          "🔢 Natural Numbers, Whole Numbers, Integers",
          "📊 Prime Numbers and Factorization",
          "🔀 LCM and HCF Concepts",
          "📈 Number Series and Patterns",
          "🎯 Divisibility Rules and Tests"
        ],
        youtubeVideos: [
          { title: "Number Systems Basics", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "15:30" },
          { title: "Prime Factorization", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "12:45" },
          { title: "LCM and HCF", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "18:20" }
        ]
      },
      { 
        name: "Percentage & Profit Loss", 
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
        description: "Learn business mathematics and financial calculations",
        content: [
          "💰 Basic Percentage Calculations",
          "📈 Profit and Loss Formulas",
          "🏪 Markup and Discount",
          "💸 Simple and Compound Interest",
          "📊 Data Interpretation with Percentages"
        ],
        youtubeVideos: [
          { title: "Percentage Fundamentals", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "20:15" },
          { title: "Profit Loss Problems", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "25:40" },
          { title: "Interest Calculations", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "22:10" }
        ]
      },
      { 
        name: "Time & Work", 
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
        description: "Solve efficiency problems and work-rate calculations",
        content: [
          "⏰ Work Rate and Efficiency",
          "👥 Combined Work Problems",
          "🔄 Pipes and Cisterns",
          "📊 Work and Wages",
          "🎯 Time and Distance Relations"
        ],
        youtubeVideos: [
          { title: "Work Rate Basics", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "16:25" },
          { title: "Combined Work Problems", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "19:30" },
          { title: "Pipes and Cisterns", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "14:45" }
        ]
      },
      { 
        name: "Speed & Distance", 
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
        description: "Master motion problems and relative speed concepts",
        content: [
          "🚗 Speed, Distance, Time Formula",
          "🔄 Relative Speed Concepts",
          "🚂 Trains and Platforms",
          "🚢 Boats and Streams",
          "✈️ Average Speed Problems"
        ],
        youtubeVideos: [
          { title: "Speed Distance Time", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "17:20" },
          { title: "Relative Speed", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "21:15" },
          { title: "Train Problems", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "18:50" }
        ]
      }
    ]
  },
  {
    title: "Verbal",
    points: ["📖 Reading Comprehension", "📚 Grammar & Vocabulary", "💬 Verbal Reasoning", "✍️ Sentence Correction", "🔤 Synonyms & Antonyms", "📝 Para Jumbles"],
    icon: "📚",
    color: "from-green-500 to-emerald-500",
    description: "Enhance your communication and language skills",
    modules: [
      { 
        name: "Grammar Fundamentals", 
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
        description: "Build strong grammar foundation and language rules",
        content: [
          "📝 Parts of Speech",
          "🔗 Sentence Structure",
          "⏰ Tenses and Verb Forms",
          "📚 Articles and Prepositions",
          "🎯 Subject-Verb Agreement"
        ],
        youtubeVideos: [
          { title: "Parts of Speech", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "22:30" },
          { title: "Tenses Mastery", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "28:15" },
          { title: "Grammar Rules", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "25:40" }
        ]
      },
      { 
        name: "Vocabulary Building", 
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
        description: "Expand your word power and language proficiency",
        content: [
          "📚 Root Words and Etymology",
          "🔤 Prefixes and Suffixes",
          "💡 Context Clues",
          "📖 Word Families",
          "🎯 Vocabulary in Context"
        ],
        youtubeVideos: [
          { title: "Root Words", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "19:25" },
          { title: "Prefixes Suffixes", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "24:10" },
          { title: "Context Clues", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "20:45" }
        ]
      },
      { 
        name: "Reading Comprehension", 
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
        description: "Master text analysis and critical reading skills",
        content: [
          "📖 Skimming and Scanning",
          "🔍 Main Idea Identification",
          "💭 Inference and Deduction",
          "📊 Fact vs Opinion",
          "🎯 Author's Purpose and Tone"
        ],
        youtubeVideos: [
          { title: "Reading Strategies", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "26:20" },
          { title: "Main Idea Finding", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "23:15" },
          { title: "Critical Reading", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "21:30" }
        ]
      },
      { 
        name: "Sentence Correction", 
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
        description: "Perfect your writing and communication skills",
        content: [
          "✍️ Common Grammar Errors",
          "🔧 Sentence Structure Fixes",
          "📝 Punctuation Rules",
          "🎯 Style and Clarity",
          "📊 Error Detection Techniques"
        ],
        youtubeVideos: [
          { title: "Common Errors", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "18:45" },
          { title: "Sentence Structure", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "22:20" },
          { title: "Punctuation Guide", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "19:55" }
        ]
      }
    ]
  },
  {
    title: "Reasoning",
    points: ["🔍 Analytical Reasoning", "🎯 Spatial Reasoning", "🧠 Abstract Reasoning", "📊 Blood Relations", "🎲 Dice & Cubes", "🔗 Coding-Decoding"],
    icon: "🧩",
    color: "from-purple-500 to-pink-500",
    description: "Develop critical thinking and analytical abilities",
    modules: [
      { 
        name: "Logical Deduction", 
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
        description: "Master logical thinking and deductive reasoning",
        content: [
          "🧠 Logical Connectives",
          "🔍 Syllogisms",
          "📊 Venn Diagrams",
          "🎯 Logical Conclusions",
          "💭 Assumption Detection"
        ],
        youtubeVideos: [
          { title: "Logical Connectives", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "24:30" },
          { title: "Syllogisms", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "27:15" },
          { title: "Venn Diagrams", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "20:40" }
        ]
      },
      { 
        name: "Analytical Reasoning", 
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
        description: "Solve complex puzzles and analytical problems",
        content: [
          "🧩 Puzzle Solving",
          "📊 Data Arrangement",
          "🎯 Direction Sense",
          "🔢 Number Series",
          "🎲 Pattern Recognition"
        ],
        youtubeVideos: [
          { title: "Puzzle Solving", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "25:20" },
          { title: "Data Arrangement", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "23:45" },
          { title: "Pattern Recognition", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "21:10" }
        ]
      },
      { 
        name: "Pattern Recognition", 
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
        description: "Identify sequences and pattern analysis",
        content: [
          "🔢 Number Patterns",
          "🔤 Letter Patterns",
          "🎨 Visual Patterns",
          "🔄 Cyclic Patterns",
          "📈 Growth Patterns"
        ],
        youtubeVideos: [
          { title: "Number Patterns", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "19:35" },
          { title: "Letter Patterns", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "22:50" },
          { title: "Visual Patterns", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "18:25" }
        ]
      },
      { 
        name: "Critical Thinking", 
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
        description: "Develop analytical skills and problem-solving approach",
        content: [
          "🤔 Question Analysis",
          "🔍 Evidence Evaluation",
          "💭 Alternative Solutions",
          "📊 Logical Flow",
          "🎯 Conclusion Drawing"
        ],
        youtubeVideos: [
          { title: "Question Analysis", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "26:15" },
          { title: "Evidence Evaluation", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "24:40" },
          { title: "Critical Thinking", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "22:20" }
        ]
      }
    ]
  },
  {
    title: "Coding",
    points: ["💻 Programming Basics", "📊 Data Structures", "🔄 Algorithms", "🎯 Problem Solving", "🧪 Debugging Skills", "⚡ Optimization"],
    icon: "💻",
    color: "from-orange-500 to-red-500",
    description: "Learn programming fundamentals and problem-solving",
    modules: [
      { 
        name: "Data Structures", 
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
        description: "Master arrays, lists, trees, and advanced data structures",
        content: [
          "📊 Arrays and Lists",
          "🌳 Trees and Graphs",
          "🔗 Linked Lists",
          "📦 Stacks and Queues",
          "🗃️ Hash Tables"
        ],
        youtubeVideos: [
          { title: "Arrays and Lists", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "28:30" },
          { title: "Trees and Graphs", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "32:15" },
          { title: "Linked Lists", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "25:40" }
        ]
      },
      { 
        name: "Algorithms", 
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
        description: "Learn sorting, searching, and algorithmic thinking",
        content: [
          "🔄 Sorting Algorithms",
          "🔍 Searching Techniques",
          "📊 Time Complexity",
          "💾 Space Complexity",
          "🎯 Algorithm Design"
        ],
        youtubeVideos: [
          { title: "Sorting Algorithms", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "30:20" },
          { title: "Searching Techniques", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "26:45" },
          { title: "Complexity Analysis", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "24:10" }
        ]
      },
      { 
        name: "Problem Solving", 
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
        description: "Crack coding interviews and competitive programming",
        content: [
          "🎯 Problem Analysis",
          "🧠 Solution Design",
          "💻 Code Implementation",
          "🧪 Testing and Debugging",
          "⚡ Optimization Techniques"
        ],
        youtubeVideos: [
          { title: "Problem Analysis", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "27:35" },
          { title: "Solution Design", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "29:20" },
          { title: "Code Implementation", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "25:15" }
        ]
      },
      { 
        name: "Code Optimization", 
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
        description: "Write efficient code",
        content: [
          "⚡ Performance Optimization",
          "💾 Memory Management",
          "🔧 Code Refactoring",
          "📊 Profiling Tools",
          "🎯 Best Practices"
        ],
        youtubeVideos: [
          { title: "Performance Tips", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "23:45" },
          { title: "Memory Management", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "26:30" },
          { title: "Code Refactoring", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "21:55" }
        ]
      }
    ]
  },
];

export default function SkillQuestPage() {
  const [input, setInput] = useState("");
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);
  const [expandedModule, setExpandedModule] = useState<{topicIndex: number, moduleIndex: number} | null>(null);

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

  const toggleModule = (topicIndex: number, moduleIndex: number) => {
    if (expandedModule?.topicIndex === topicIndex && expandedModule?.moduleIndex === moduleIndex) {
      setExpandedModule(null);
    } else {
      setExpandedModule({ topicIndex, moduleIndex });
    }
  };

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
          {topics.map((t, topicIndex) => (
            <div 
              key={t.title} 
              className="card-hover bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${topicIndex * 0.1}s` }}
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
                <div className="space-y-3">
                  {t.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="space-y-2">
                      <div className="group">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20 transition-all duration-200">
                          <div className="flex-1">
                            <p className="text-xs font-medium text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                              {module.name}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {module.description}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => toggleModule(topicIndex, moduleIndex)}
                              className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
                            >
                              {expandedModule?.topicIndex === topicIndex && expandedModule?.moduleIndex === moduleIndex ? 'Hide' : 'Explore'}
                            </button>
                            <a 
                              href={module.video} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                            >
                              <span className="text-white text-xs">▶</span>
                            </a>
                          </div>
                        </div>
                        
                        {/* Expanded Module Content */}
                        {expandedModule?.topicIndex === topicIndex && expandedModule?.moduleIndex === moduleIndex && (
                          <div className="mt-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg border border-blue-200 dark:border-blue-700 animate-slideInRight">
                            <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center">
                              <span className="mr-2">📖</span> Learning Content
                            </h5>
                            <div className="space-y-2 mb-4">
                              {module.content.map((item, idx) => (
                                <div key={idx} className="flex items-start text-sm text-blue-700 dark:text-blue-300">
                                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  {item}
                                </div>
                              ))}
                            </div>
                            
                            <h5 className="font-semibold text-red-800 dark:text-red-200 mb-3 flex items-center">
                              <span className="mr-2">🎥</span> YouTube Videos
                            </h5>
                            <div className="space-y-2">
                              {module.youtubeVideos.map((video, idx) => (
                                <a
                                  key={idx}
                                  href={video.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-between p-2 bg-white dark:bg-gray-700 rounded-lg border border-red-200 dark:border-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200 group"
                                >
                                  <div className="flex-1">
                                    <p className="text-xs font-medium text-red-800 dark:text-red-200 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                                      {video.title}
                                    </p>
                                    <p className="text-xs text-red-600 dark:text-red-400">
                                      Duration: {video.duration}
                                    </p>
                                  </div>
                                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <span className="text-white text-xs">▶</span>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
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

