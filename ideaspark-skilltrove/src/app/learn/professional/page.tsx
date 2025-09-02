export default function ProfessionalLearningPage() {
  const learningPaths = [
    {
      title: "System Design",
      icon: "🏗️",
      color: "from-blue-500 to-indigo-500",
      description: "Master scalable architecture and distributed systems design",
      topics: [
        { name: "Scalability", items: ["Load balancing", "Partitioning", "Replication", "Horizontal scaling"] },
        { name: "Storage", items: ["SQL vs NoSQL", "Indexing strategies", "Caching layers", "Data modeling"] },
        { name: "Availability", items: ["CAP theorem", "Quorum systems", "Retry mechanisms", "Circuit breakers"] },
        { name: "Observability", items: ["Metrics collection", "Distributed tracing", "Alerting systems", "Performance monitoring"] }
      ],
      resources: [
        { name: "Sample Case Study", type: "📖", href: "#" },
        { name: "Design Exercises", type: "🧩", href: "#" },
        { name: "Architecture Patterns", type: "📐", href: "#" }
      ]
    },
    {
      title: "Cloud Computing",
      icon: "☁️",
      color: "from-green-500 to-teal-500",
      description: "Learn modern cloud platforms and infrastructure as code",
      topics: [
        { name: "Compute", items: ["Container orchestration", "Serverless functions", "Auto-scaling", "Microservices"] },
        { name: "Networking", items: ["VPC design", "API gateways", "Security groups", "CDN optimization"] },
        { name: "Data", items: ["Object storage", "Managed databases", "Streaming platforms", "Data lakes"] },
        { name: "Security", items: ["IAM policies", "Encryption", "Compliance", "Threat detection"] }
      ],
      resources: [
        { name: "Cloud Labs", type: "🔬", href: "#" },
        { name: "Best Practices", type: "✅", href: "#" },
        { name: "Cost Optimization", type: "💰", href: "#" }
      ]
    },
    {
      title: "Leadership Qualities",
      icon: "👑",
      color: "from-purple-500 to-pink-500",
      description: "Develop essential leadership skills for technical teams",
      topics: [
        { name: "Communication", items: ["Clear messaging", "Stakeholder alignment", "Feedback culture", "Presentation skills"] },
        { name: "Execution", items: ["Priority management", "Delegation", "Delivery habits", "Risk mitigation"] },
        { name: "People Management", items: ["Mentoring", "Hiring strategies", "Performance growth", "Team building"] },
        { name: "Strategic Thinking", items: ["Vision setting", "Roadmap planning", "Measurable outcomes", "Innovation"] }
      ],
      resources: [
        { name: "Leadership Toolkit", type: "🛠️", href: "#" },
        { name: "Scenario Playbooks", type: "📚", href: "#" },
        { name: "Case Studies", type: "📖", href: "#" }
      ]
    }
  ];

  const progressStats = [
    { label: "Modules Completed", value: "8/12", icon: "📚", color: "from-green-500 to-emerald-500" },
    { label: "Hours Invested", value: "45h", icon: "⏱️", color: "from-blue-500 to-cyan-500" },
    { label: "Certificates", value: "3", icon: "🏅", color: "from-yellow-500 to-orange-500" },
    { label: "Skills Level", value: "Advanced", icon: "🚀", color: "from-purple-500 to-pink-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-indigo-900 dark:to-blue-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-4xl">
            💼
          </div>
          <h1 className="text-5xl font-bold gradient-text mb-4">Professional Learning</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Deepen your expertise with curated learning paths in system design, cloud computing, and leadership.
            Take your career to the next level with industry-recognized skills.
          </p>
        </div>

        {/* Progress Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {progressStats.map((stat, index) => (
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

        {/* Learning Paths */}
        <div className="space-y-12 mb-16">
          {learningPaths.map((path, index) => (
            <div 
              key={path.title}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6 mb-8">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${path.color} flex items-center justify-center text-3xl flex-shrink-0`}>
                  {path.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">{path.title}</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{path.description}</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">📋 Learning Topics</h3>
                  <div className="space-y-4">
                    {path.topics.map((topic, idx) => (
                      <div key={topic.name} className="border-l-4 border-indigo-500 pl-4">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{topic.name}</h4>
                        <ul className="space-y-1">
                          {topic.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">📚 Learning Resources</h3>
                  <div className="space-y-3">
                    {path.resources.map((resource, idx) => (
                      <a 
                        key={resource.name}
                        href={resource.href}
                        className="flex items-center p-3 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 group"
                      >
                        <span className="text-xl mr-3">{resource.type}</span>
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {resource.name}
                        </span>
                        <span className="ml-auto text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="/quiz/professional"
                    className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-xl font-semibold hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                  >
                    🎯 Take Assessment
                  </a>
                  <a 
                    href="/projects"
                    className="px-6 py-3 border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 rounded-xl font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300"
                  >
                    🚀 Practice Projects
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Steps Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4 text-center">Ready to Advance Your Career?</h2>
            <p className="text-lg mb-8 text-center opacity-90 max-w-2xl mx-auto">
              Complete your learning journey and earn industry-recognized SkillTrove certificates
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/quiz/professional"
                className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                🎯 Start Assessment
              </a>
              <a 
                href="/projects"
                className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-300"
              >
                🚀 Explore Projects
              </a>
            </div>
          </div>
        </div>

        {/* Learning Tips */}
        <div className="text-center">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">💡 Pro Learning Tips</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl mb-3">📅</div>
                <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Consistent Practice</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Dedicate 1-2 hours daily for maximum retention</p>
              </div>
              <div>
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Peer Learning</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Join study groups and share knowledge</p>
              </div>
              <div>
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Real Projects</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Apply concepts to real-world scenarios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

