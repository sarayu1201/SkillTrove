"use client";

import { useEffect, useState } from "react";

export default function HubPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const bounties = [
    { id: 1, title: "Build landing page animation", reward: "₹3,000", difficulty: "Easy", icon: "🎨" },
    { id: 2, title: "Create quiz analytics dashboard", reward: "₹5,000", difficulty: "Medium", icon: "📊" },
    { id: 3, title: "Implement AI chat feature", reward: "₹8,000", difficulty: "Hard", icon: "🤖" },
  ];

  async function send() {
    if (!input.trim()) return;
    const content = input.trim();
    setInput("");
    setMessages((m) => [...m, content]);
    try {
      await fetch("/api/hub/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
    } catch {}
  }

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/hub/message");
        const data = await res.json();
        setMessages(data.messages?.map((m: any) => m.content) || []);
      } catch {}
    })();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl">
            🤝
          </div>
          <h1 className="text-5xl font-bold gradient-text mb-4">Student-Professional Hub</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Connect, collaborate, and claim skill bounties in our vibrant community
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Chat Section */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl mr-4">
                💬
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Community Chat</h2>
                <p className="text-gray-600 dark:text-gray-300">Connect with peers and mentors</p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 h-80 overflow-y-auto mb-6">
              {messages.length === 0 ? (
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <div className="text-4xl mb-4">👋</div>
                  <p>No messages yet. Start the conversation!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((m, i) => (
                    <div key={i} className="bg-white dark:bg-gray-600 rounded-2xl p-4 shadow-sm">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm mr-3">
                          U
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-white">User</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{m}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-4">
              <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                className="flex-1 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-4 bg-transparent focus:border-purple-500 focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 transition-all duration-300" 
                placeholder="Type your message..." 
                onKeyPress={(e) => e.key === 'Enter' && send()}
              />
              <button 
                onClick={send} 
                className="px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send
              </button>
            </div>
          </div>

          {/* Bounties Section */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-xl mr-4">
                💰
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Skill Bounties</h2>
                <p className="text-gray-600 dark:text-gray-300">Real projects, real rewards</p>
              </div>
            </div>

            <div className="space-y-4">
              {bounties.map((bounty, index) => (
                <div key={bounty.id} className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 card-hover">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <div className="text-2xl mr-3">{bounty.icon}</div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white">{bounty.title}</h3>
                          <div className="flex items-center gap-4 mt-1">
                            <span className="text-sm text-gray-600 dark:text-gray-300">Reward: <span className="font-semibold text-green-600">{bounty.reward}</span></span>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              bounty.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                              bounty.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                              'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                            }`}>
                              {bounty.difficulty}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Claim
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">💡 How it works</h3>
              <ul className="space-y-2 text-sm">
                <li>• Browse available bounties from companies</li>
                <li>• Claim projects that match your skills</li>
                <li>• Submit your work and get paid</li>
                <li>• Build your portfolio with real projects</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

