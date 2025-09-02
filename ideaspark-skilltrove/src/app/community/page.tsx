"use client";

import { useState } from "react";

export default function CommunityPage() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("general");

  const communityStats = [
    { label: "Active Members", value: "2,500+", icon: "👥", color: "from-blue-500 to-cyan-500" },
    { label: "Discussions", value: "1,200+", icon: "💬", color: "from-green-500 to-emerald-500" },
    { label: "Projects Shared", value: "450+", icon: "🚀", color: "from-purple-500 to-pink-500" },
    { label: "Success Stories", value: "180+", icon: "🏆", color: "from-orange-500 to-red-500" }
  ];

  const categories = [
    { id: "general", name: "General Discussion", icon: "💭", color: "from-blue-500 to-cyan-500" },
    { id: "technical", name: "Technical Help", icon: "🔧", color: "from-green-500 to-emerald-500" },
    { id: "career", name: "Career Advice", icon: "💼", color: "from-purple-500 to-pink-500" },
    { id: "projects", name: "Project Showcase", icon: "🚀", color: "from-orange-500 to-red-500" },
    { id: "learning", name: "Learning Tips", icon: "📚", color: "from-indigo-500 to-purple-500" },
    { id: "events", name: "Events & Meetups", icon: "🎉", color: "from-pink-500 to-rose-500" }
  ];

  const recentDiscussions = [
    { title: "Best practices for React performance optimization", author: "Sarah Chen", replies: 23, category: "technical" },
    { title: "How I landed my dream job at Google", author: "Alex Rodriguez", replies: 45, category: "career" },
    { title: "Showcasing my AI chatbot project", author: "Priya Patel", replies: 18, category: "projects" },
    { title: "Tips for learning new programming languages", author: "David Kim", replies: 31, category: "learning" }
  ];

  const handleSubmit = () => {
    if (feedback.trim().length > 0) {
      setSubmitted(true);
      // Here you would typically send the feedback to your backend
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl">
            🤝
          </div>
          <h1 className="text-5xl font-bold gradient-text mb-4">SkillTrove Community</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our vibrant community of learners, professionals, and innovators. Share ideas, get help, and grow together.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <div 
              key={stat.label}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-xl mb-4 animate-pulse`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Discussion Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Discussion Categories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div 
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id 
                    ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20' 
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-purple-300'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl mb-4`}>
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Discussions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Recent Discussions</h2>
          <div className="grid gap-6">
            {recentDiscussions.map((discussion, index) => (
              <div 
                key={discussion.title}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{discussion.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>👤 {discussion.author}</span>
                      <span>💬 {discussion.replies} replies</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        discussion.category === 'technical' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                        discussion.category === 'career' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        discussion.category === 'projects' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                        'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                      }`}>
                        {discussion.category}
                      </span>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                    Join Discussion
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl">
                💡
              </div>
              <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Share Your Feedback</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Help us improve SkillTrove by sharing your thoughts, suggestions, and ideas
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  What's on your mind?
                </label>
                <textarea 
                  value={feedback} 
                  onChange={(e) => setFeedback(e.target.value)} 
                  className="w-full min-h-32 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-4 bg-transparent focus:border-purple-500 focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 transition-all duration-300 resize-none" 
                  placeholder="Share your feedback, suggestions, or ideas to help us improve SkillTrove..."
                  disabled={submitted}
                />
              </div>
              
              <button 
                onClick={handleSubmit} 
                disabled={submitted || feedback.trim().length === 0}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  submitted || feedback.trim().length === 0
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                }`}
              >
                {submitted ? "✅ Thank You! Feedback Submitted" : "🚀 Submit Feedback"}
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Connect with like-minded learners, share your knowledge, and grow your network
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/login" 
                className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Join Community
              </a>
              <a 
                href="/hub" 
                className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300"
              >
                Start Chatting
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

