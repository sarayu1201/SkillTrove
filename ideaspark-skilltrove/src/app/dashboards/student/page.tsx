import Link from "next/link";

export default function StudentDashboard() {
  const features = [
    { title: "SkillQuest", desc: "AI-powered learning with stories", href: "/skillquest", icon: "🧠", color: "from-purple-500 to-pink-500" },
    { title: "Take Quiz", desc: "Test your knowledge & earn points", href: "/quiz/student", icon: "🎯", color: "from-blue-500 to-cyan-500" },
    { title: "Projects", desc: "Build real-world applications", href: "/projects", icon: "🚀", color: "from-green-500 to-emerald-500" },
    { title: "Internships", desc: "Apply to exciting opportunities", href: "/internships", icon: "💼", color: "from-orange-500 to-red-500" },
    { title: "Leaderboard", desc: "Compete with peers globally", href: "/leaderboard", icon: "🏆", color: "from-indigo-500 to-purple-500" },
    { title: "Hub", desc: "Connect with professionals", href: "/hub", icon: "🤝", color: "from-teal-500 to-blue-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-4xl">
            🎓
          </div>
          <h1 className="text-5xl font-bold gradient-text mb-4">Student Dashboard</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your personalized learning hub for skill development and career growth
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Total Score", value: "1,250", icon: "⭐", color: "from-yellow-400 to-orange-500" },
            { label: "Quizzes Taken", value: "12", icon: "📊", color: "from-blue-400 to-blue-600" },
            { label: "Certificates", value: "3", icon: "🏅", color: "from-green-400 to-green-600" },
            { label: "Rank", value: "#47", icon: "🎖️", color: "from-purple-400 to-purple-600" },
          ].map((stat, index) => (
            <div key={stat.label} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-xl mb-4`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link 
              key={feature.title} 
              href={feature.href} 
              className="group card-hover bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{feature.desc}</p>
              <div className="flex items-center text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                Explore →
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/quiz/student" className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-300">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold mb-2">Start Quiz</h3>
              <p className="text-sm opacity-90">Test your skills now</p>
            </Link>
            <Link href="/skillquest" className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-300">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="font-bold mb-2">Learn</h3>
              <p className="text-sm opacity-90">AI-powered lessons</p>
            </Link>
            <Link href="/leaderboard" className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-300">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="font-bold mb-2">Compete</h3>
              <p className="text-sm opacity-90">See your ranking</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

