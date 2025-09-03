"use client";

import Link from "next/link";

export default function ProfessionalDashboard() {
  const stats = [
    { 
      label: "Experience Score", 
      value: "8,750", 
      icon: "⭐", 
      color: "from-yellow-500 to-orange-500",
      change: "+250 this month"
    },
    { 
      label: "Professional Coins", 
      value: "5,420", 
      icon: "🪙", 
      color: "from-green-500 to-emerald-500",
      change: "+180 this week"
    },
    { 
      label: "Skills Mastered", 
      value: "18", 
      icon: "🎯", 
      color: "from-blue-500 to-cyan-500",
      change: "+2 this month"
    },
    { 
      label: "Mentorship Hours", 
      value: "45", 
      icon: "🤝", 
      color: "from-purple-500 to-pink-500",
      change: "+5 this week"
    }
  ];

  const features = [
    { 
      title: "Professional Learning", 
      description: "Advance your career with expert courses", 
      icon: "📚", 
      color: "from-blue-500 to-cyan-500",
      link: "/learn/professional"
    },
    { 
      title: "Take Assessment", 
      description: "Test your professional skills", 
      icon: "🎯", 
      color: "from-green-500 to-emerald-500",
      link: "/quiz/professional"
    },
    { 
      title: "Mentor Students", 
      description: "Share your expertise and knowledge", 
      icon: "👨‍🏫", 
      color: "from-purple-500 to-pink-500",
      link: "/hub"
    },
    { 
      title: "Industry Network", 
      description: "Connect with industry leaders", 
      icon: "🌐", 
      color: "from-indigo-500 to-purple-500",
      link: "/industry"
    }
  ];

  const recentActivities = [
    { action: "Completed System Design Course", score: "+300", time: "3 hours ago", icon: "✅" },
    { action: "Mentored 3 Students", score: "+150", time: "1 day ago", icon: "👨‍🏫" },
    { action: "Earned Leadership Badge", score: "+200", time: "2 days ago", icon: "🏅" },
    { action: "Joined Industry Panel", score: "+100", time: "3 days ago", icon: "🎤" }
  ];

  // Generate heatmap data
  const generateHeatmap = () => {
    const days = 30;
    const heatmap = [];
    for (let i = 0; i < days; i++) {
      heatmap.push({
        day: i + 1,
        intensity: Math.floor(Math.random() * 5) + 1,
        date: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000)
      });
    }
    return heatmap;
  };

  const heatmapData = generateHeatmap();

  const skillProgress = [
    { skill: "System Design", progress: 85, color: "from-blue-500 to-cyan-500" },
    { skill: "Cloud Computing", progress: 72, color: "from-green-500 to-emerald-500" },
    { skill: "Leadership", progress: 68, color: "from-purple-500 to-pink-500" },
    { skill: "DevOps", progress: 55, color: "from-yellow-500 to-orange-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Welcome back, <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Professional!</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-300">Ready to advance your career and mentor others?</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">🪙</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total Coins</div>
                  <div className="text-xl font-bold text-gray-900 dark:text-white">5,420</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-2xl text-white shadow-lg`}>
                  {stat.icon}
                </div>
                <div className="text-right">
                  <div className="text-xs text-green-600 dark:text-green-400 font-medium">{stat.change}</div>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
                    {/* Features Grid */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="mr-3">🚀</span> Professional Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Link 
                key={index}
                href={feature.link}
                className="group block"
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 transform group-hover:scale-105 transition-all duration-300 hover:shadow-lg professional-card">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-3xl text-white shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                    {feature.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Quiz Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 border border-blue-200 dark:border-blue-700">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
              <span className="mr-3">🎯</span> Quick Assessment
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Test your professional skills with our quick assessment
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-700">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-3xl text-white">
                🏗️
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">System Design</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Test architecture skills</p>
              <Link 
                href="/quiz/professional"
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl text-sm font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Quiz
              </Link>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-700">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl text-white">
                ☁️
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Cloud Computing</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Test cloud expertise</p>
              <Link 
                href="/quiz/professional"
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl text-sm font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Quiz
              </Link>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-700">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl text-white">
                👑
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Leadership</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Test management skills</p>
              <Link 
                href="/quiz/professional"
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl text-sm font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Quiz
              </Link>
            </div>
          </div>
        </div>

            {/* Recent Activities */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="mr-3">📊</span> Recent Activities
              </h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl border border-gray-200 dark:border-gray-600 transform hover:scale-102 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl">{activity.icon}</div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">{activity.action}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</div>
                      </div>
                    </div>
                    <div className="text-green-600 dark:text-green-400 font-bold">{activity.score}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill Progress */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="mr-3">📈</span> Skill Progress
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {skillProgress.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">{skill.skill}</span>
                      <span className="text-gray-900 dark:text-white font-bold">{skill.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`} 
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Activity Heatmap */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-2">🔥</span> Activity Heatmap
              </h3>
              <div className="grid grid-cols-7 gap-1 mb-4">
                {heatmapData.slice(-7).map((day, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-8 h-8 rounded-md mb-1 ${
                      day.intensity === 1 ? 'bg-gray-100 dark:bg-gray-700' :
                      day.intensity === 2 ? 'bg-purple-200 dark:bg-purple-800' :
                      day.intensity === 3 ? 'bg-purple-300 dark:bg-purple-700' :
                      day.intensity === 4 ? 'bg-purple-400 dark:bg-purple-600' :
                      'bg-purple-500 dark:bg-purple-500'
                    }`}></div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {day.date.toLocaleDateString('en-US', { weekday: 'short' })}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                <span>Less</span>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-gray-100 dark:bg-gray-700 rounded"></div>
                  <div className="w-3 h-3 bg-purple-200 dark:bg-purple-800 rounded"></div>
                  <div className="w-3 h-3 bg-purple-400 dark:bg-purple-600 rounded"></div>
                  <div className="w-3 h-3 bg-purple-500 dark:bg-purple-500 rounded"></div>
                </div>
                <span>More</span>
              </div>
            </div>

            {/* Professional Insights */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-2">💡</span> Professional Insights
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
                  <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">🎯 Career Tip</div>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Focus on system design skills - they're in high demand and can significantly boost your career prospects.
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-200 dark:border-green-800">
                  <div className="text-green-600 dark:text-green-400 font-semibold mb-2">🚀 Growth Opportunity</div>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Consider mentoring students to build your leadership skills and expand your professional network.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">📊</span> This Month
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-purple-100">Students Mentored</span>
                  <span className="font-bold">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-100">Courses Completed</span>
                  <span className="font-bold">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-100">Skills Improved</span>
                  <span className="font-bold">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

