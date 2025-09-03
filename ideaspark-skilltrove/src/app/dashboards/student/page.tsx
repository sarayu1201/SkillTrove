"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";

export default function StudentDashboard() {
  const stats = [
    { 
      label: "Courses Completed", 
      value: "12", 
      icon: "📚", 
      color: "from-blue-500 to-cyan-500",
      change: "+3 this month"
    },
    { 
      label: "Quiz Score", 
      value: "8,450", 
      icon: "🎯", 
      color: "from-green-500 to-emerald-500",
      change: "+150 this week"
    },
    { 
      label: "Coins Earned", 
      value: "2,850", 
      icon: "🪙", 
      color: "from-yellow-500 to-orange-500",
      change: "+200 this week"
    },
    { 
      label: "Learning Streak", 
      value: "15 days", 
      icon: "🔥", 
      color: "from-red-500 to-pink-500",
      change: "Personal best!"
    }
  ];

  const features = [
    { 
      title: "SkillQuest", 
      description: "Master aptitude, reasoning, and coding", 
      icon: "🎓", 
      color: "from-blue-500 to-cyan-500",
      link: "/skillquest"
    },
    { 
      title: "Take Quiz", 
      description: "Test your knowledge and earn certificates", 
      icon: "🎯", 
      color: "from-green-500 to-emerald-500",
      link: "/quiz/student"
    },
    { 
      title: "Leaderboard", 
      description: "Compete with peers worldwide", 
      icon: "🏆", 
      color: "from-yellow-500 to-orange-500",
      link: "/leaderboard"
    },
    { 
      title: "Community", 
      description: "Connect with fellow learners", 
      icon: "🤝", 
      color: "from-purple-500 to-pink-500",
      link: "/community"
    }
  ];

  const recentActivities = [
    { action: "Completed Aptitude Quiz", score: "+150", time: "2 hours ago", icon: "✅" },
    { action: "Watched Coding Module", score: "+50", time: "5 hours ago", icon: "📹" },
    { action: "Earned Daily Bonus", score: "+100", time: "1 day ago", icon: "🎁" },
    { action: "Joined Study Group", score: "+25", time: "2 days ago", icon: "👥" }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Welcome back, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Student!</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-300">Ready to continue your learning journey?</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">🪙</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total Coins</div>
                  <div className="text-xl font-bold text-gray-900 dark:text-white">2,850</div>
                </div>
              </div>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🚪 Logout
              </button>
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
                <span className="mr-3">🚀</span> Quick Actions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Link 
                    key={index}
                    href={feature.link}
                    className="group block"
                  >
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 transform group-hover:scale-105 transition-all duration-300 hover:shadow-lg">
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
                      day.intensity === 2 ? 'bg-green-200 dark:bg-green-800' :
                      day.intensity === 3 ? 'bg-green-300 dark:bg-green-700' :
                      day.intensity === 4 ? 'bg-green-400 dark:bg-green-600' :
                      'bg-green-500 dark:bg-green-500'
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
                  <div className="w-3 h-3 bg-green-200 dark:bg-green-800 rounded"></div>
                  <div className="w-3 h-3 bg-green-400 dark:bg-green-600 rounded"></div>
                  <div className="w-3 h-3 bg-green-500 dark:bg-green-500 rounded"></div>
                </div>
                <span>More</span>
              </div>
            </div>

            {/* Learning Progress */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-2">📈</span> Learning Progress
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 dark:text-gray-400">Aptitude</span>
                    <span className="text-gray-900 dark:text-white font-semibold">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 dark:text-gray-400">Verbal</span>
                    <span className="text-gray-900 dark:text-white font-semibold">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 dark:text-gray-400">Reasoning</span>
                    <span className="text-gray-900 dark:text-white font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 dark:text-gray-400">Coding</span>
                    <span className="text-gray-900 dark:text-white font-semibold">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">💡</span> Pro Tip
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Take quizzes regularly to maintain your learning streak and earn bonus coins. Consistency is key to success!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

