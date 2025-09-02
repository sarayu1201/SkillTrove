export default function ProfessionalLearningPage() {
  const progressStats = [
    { label: "Courses Completed", value: "8", icon: "📚", color: "from-blue-500 to-cyan-500" },
    { label: "Skills Mastered", value: "12", icon: "🎯", color: "from-green-500 to-emerald-500" },
    { label: "Certificates Earned", value: "5", icon: "🏆", color: "from-yellow-500 to-orange-500" },
    { label: "Learning Hours", value: "156", icon: "⏰", color: "from-purple-500 to-pink-500" }
  ];

  const learningPaths = [
    {
      title: "System Design & Architecture",
      description: "Master the art of designing scalable, reliable, and efficient systems",
      icon: "🏗️",
      color: "from-blue-500 to-cyan-500",
      topics: [
        "Distributed Systems", "Microservices Architecture", "Database Design",
        "Load Balancing", "Caching Strategies", "API Design", "Security Patterns"
      ],
      resources: ["Video Lectures", "Case Studies", "Hands-on Projects", "Peer Reviews"],
      progress: 75
    },
    {
      title: "Cloud Computing & DevOps",
      description: "Learn modern cloud platforms and DevOps practices for seamless deployment",
      icon: "☁️",
      color: "from-green-500 to-emerald-500",
      topics: [
        "AWS/Azure/GCP", "Container Orchestration", "CI/CD Pipelines",
        "Infrastructure as Code", "Monitoring & Logging", "Security & Compliance"
      ],
      resources: ["Cloud Labs", "Real Projects", "Certification Prep", "Industry Tools"],
      progress: 60
    },
    {
      title: "Leadership & Management",
      description: "Develop essential leadership skills for career advancement",
      icon: "👑",
      color: "from-purple-500 to-pink-500",
      topics: [
        "Team Management", "Project Leadership", "Communication Skills",
        "Strategic Thinking", "Conflict Resolution", "Change Management"
      ],
      resources: ["Leadership Workshops", "Case Studies", "Mentorship", "Peer Learning"],
      progress: 45
    }
  ];

  const nextSteps = [
    { action: "Complete System Design Assessment", priority: "High", icon: "🎯" },
    { action: "Join Cloud Computing Workshop", priority: "Medium", icon: "☁️" },
    { action: "Attend Leadership Seminar", priority: "Medium", icon: "👑" },
    { action: "Review Progress Report", priority: "Low", icon: "📊" }
  ];

  const proTips = [
    {
      tip: "Focus on practical application rather than just theory. Build real projects to demonstrate your skills.",
      category: "Learning Strategy",
      icon: "💡"
    },
    {
      tip: "Network with industry professionals through our community. Mentorship can accelerate your growth significantly.",
      category: "Networking",
      icon: "🤝"
    },
    {
      tip: "Stay updated with industry trends. Technology evolves rapidly, and continuous learning is key to staying relevant.",
      category: "Industry Knowledge",
      icon: "📈"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl animate-pulse">
            💼
          </div>
          <h1 className="text-5xl font-bold gradient-text mb-4">Professional Learning</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Advance your career with industry-relevant skills, expert-led courses, and hands-on projects
          </p>
        </div>

        {/* Progress Stats */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">📊 Your Learning Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {progressStats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-3xl text-white shadow-lg`}>
                  {stat.icon}
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Paths */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">🚀 Learning Paths</h2>
          <div className="space-y-8">
            {learningPaths.map((path, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 transform hover:scale-102 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${path.color} flex items-center justify-center text-4xl text-white shadow-lg`}>
                      {path.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{path.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 max-w-2xl">{path.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{path.progress}%</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Complete</div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <span className="mr-2">📚</span> Topics Covered
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {path.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <span className="mr-2">🎯</span> Learning Resources
                    </h4>
                    <div className="space-y-2">
                      {path.resources.map((resource, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">{resource}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 dark:text-gray-400">Progress</span>
                    <span className="text-gray-900 dark:text-white font-semibold">{path.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full bg-gradient-to-r ${path.color}`} 
                      style={{ width: `${path.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Next Steps */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="mr-3">🎯</span> Next Steps
            </h2>
            <div className="space-y-4">
              {nextSteps.map((step, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl border border-gray-200 dark:border-gray-600 transform hover:scale-102 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{step.icon}</div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{step.action}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Priority: {step.priority}</div>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl text-sm font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                    Start
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Learning Tips */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="mr-3">💡</span> Pro Learning Tips
            </h2>
            <div className="space-y-4">
              {proTips.map((tip, index) => (
                <div 
                  key={index}
                  className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200 dark:border-blue-800"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">{tip.icon}</div>
                    <div>
                      <div className="font-semibold text-blue-800 dark:text-blue-200 mb-1">{tip.category}</div>
                      <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">{tip.tip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Accelerate Your Career?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join thousands of professionals who have already advanced their careers with SkillTrove's expert-led learning programs
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/quiz/professional" 
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🎯 Take Assessment
              </a>
              <a 
                href="/hub" 
                className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                🤝 Join Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

