import Link from "next/link";

export default function ProfessionalDashboard() {
  const features = [
    { title: "Professional Learning", desc: "System design, cloud computing, leadership", href: "/learn/professional", icon: "💼", color: "from-blue-500 to-indigo-500" },
    { title: "Skill Assessments", desc: "Test your professional expertise", href: "/quiz/professional", icon: "📋", color: "from-green-500 to-teal-500" },
    { title: "Industry Projects", desc: "Real-world business challenges", href: "/projects", icon: "🏢", color: "from-purple-500 to-pink-500" },
    { title: "Student Hub", desc: "Mentor and connect with students", href: "/hub", icon: "🤝", color: "from-orange-500 to-red-500" },
    { title: "Leaderboard", desc: "Compete with other professionals", href: "/leaderboard", icon: "🏆", color: "from-yellow-500 to-orange-500" },
    { title: "Industry Setup", desc: "Placement opportunities", href: "/industry", icon: "🎯", color: "from-indigo-500 to-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-4xl">
            💼
          </div>
          <h1 className="text-5xl font-bold gradient-text mb-4">Professional Dashboard</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your advanced reskilling hub for career advancement and industry expertise
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Experience Score", value: "8,750", icon: "⭐", color: "from-yellow-400 to-orange-500" },
            { label: "Professional Coins", value: "5,420", icon: "🪙", color: "from-yellow-500 to-yellow-600" },
            { label: "Assessments", value: "8", icon: "📊", color: "from-blue-400 to-blue-600" },
            { label: "Rank", value: "#12", icon: "🎖️", color: "from-purple-400 to-purple-600" },
          ].map((stat, index) => (
            <div key={stat.label} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 card-hover transform hover:scale-105 transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-xl mb-4 animate-pulse`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Activity Heatmap */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">📈 Professional Activity Heatmap</h2>
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <div key={day} className="text-center text-sm font-medium text-gray-600 dark:text-gray-300">{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 28 }, (_, i) => {
                const intensity = Math.floor(Math.random() * 5);
                const colors = ['bg-gray-100 dark:bg-gray-700', 'bg-blue-200 dark:bg-blue-800', 'bg-blue-300 dark:bg-blue-700', 'bg-blue-400 dark:bg-blue-600', 'bg-blue-500 dark:bg-blue-500'];
                return (
                  <div 
                    key={i} 
                    className={`w-8 h-8 rounded ${colors[intensity]} hover:scale-110 transition-transform duration-200 cursor-pointer`}
                    title={`${intensity} activities`}
                  />
                );
              })}
            </div>
            <div className="flex justify-center mt-4 space-x-4 text-sm text-gray-600 dark:text-gray-300">
              <span>Less</span>
              <div className="flex space-x-1">
                {[0,1,2,3,4].map(i => (
                  <div key={i} className={`w-3 h-3 rounded ${['bg-gray-100 dark:bg-gray-700', 'bg-blue-200 dark:bg-blue-800', 'bg-blue-300 dark:bg-blue-700', 'bg-blue-400 dark:bg-blue-600', 'bg-blue-500 dark:bg-blue-500'][i]}`} />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link 
              key={feature.title} 
              href={feature.href} 
              className="group card-hover bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{feature.desc}</p>
              <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                Explore →
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/quiz/professional" className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-300">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-bold mb-2">Take Assessment</h3>
              <p className="text-sm opacity-90">Test your skills</p>
            </Link>
            <Link href="/learn/professional" className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-300">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="font-bold mb-2">Learn</h3>
              <p className="text-sm opacity-90">Professional skills</p>
            </Link>
            <Link href="/hub" className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-300">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-bold mb-2">Mentor</h3>
              <p className="text-sm opacity-90">Connect with students</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

