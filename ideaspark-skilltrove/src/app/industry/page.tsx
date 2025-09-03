export default function IndustryPage() {
  const topStudents = [
    {
      name: "Alex Rodriguez",
      score: 98,
      domain: "Cloud Computing",
      avatar: "👨‍💻",
      achievements: ["AWS Certified", "3 Projects Completed", "Perfect Quiz Score"],
      company: "Amazon Web Services",
      position: "Cloud Solutions Architect",
      package: "$120,000/year"
    },
    {
      name: "Priya Patel",
      score: 96,
      domain: "AI/ML",
      avatar: "👩‍🔬",
      achievements: ["TensorFlow Expert", "Research Paper Published", "AI Competition Winner"],
      company: "Google",
      position: "Machine Learning Engineer",
      package: "$140,000/year"
    },
    {
      name: "David Kim",
      score: 94,
      domain: "Cybersecurity",
      avatar: "👨‍🔒",
      achievements: ["CISSP Certified", "Security Research", "Bug Bounty Hunter"],
      company: "Cisco",
      position: "Security Engineer",
      package: "$110,000/year"
    }
  ];

  const partnerCompanies = [
    { name: "Cisco", logo: "🌐", industry: "Networking", openings: 15, color: "from-blue-500 to-cyan-500" },
    { name: "Miracle Software", logo: "✨", industry: "AI/ML", openings: 8, color: "from-purple-500 to-pink-500" },
    { name: "Capgemini", logo: "🔷", industry: "Consulting", openings: 22, color: "from-indigo-500 to-blue-500" },
    { name: "TCS", logo: "🔴", industry: "IT Services", openings: 35, color: "from-red-500 to-pink-500" },
    { name: "Infosys", logo: "🔵", industry: "Technology", openings: 28, color: "from-blue-500 to-indigo-500" },
    { name: "Wipro", logo: "🟢", industry: "Digital Solutions", openings: 18, color: "from-green-500 to-emerald-500" }
  ];

  const placementStats = [
    { label: "Students Placed", value: "450+", icon: "🎯", color: "from-green-500 to-emerald-500" },
    { label: "Partner Companies", value: "25+", icon: "🏢", color: "from-blue-500 to-indigo-500" },
    { label: "Average Package", value: "$85K", icon: "💰", color: "from-yellow-500 to-orange-500" },
    { label: "Success Rate", value: "92%", icon: "📈", color: "from-purple-500 to-pink-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900 dark:to-teal-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-4xl">
            🏢
          </div>
          <h1 className="text-5xl font-bold gradient-text mb-4">Industry Setup</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Connect top talent with leading companies. Your gateway to dream careers and industry partnerships.
          </p>
        </div>

        {/* Placement Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {placementStats.map((stat, index) => (
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

        {/* Top Students Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">🌟 Top Students of the Month</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {topStudents.map((student, index) => (
              <div 
                key={student.name}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 animate-bounce">{student.avatar}</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{student.name}</h3>
                  <div className="text-lg text-emerald-600 dark:text-emerald-400 font-semibold mb-1">{student.domain}</div>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">{student.score}/100</div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">🏆 Achievements:</h4>
                  <ul className="space-y-2">
                    {student.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Placed at:</div>
                    <div className="font-bold text-lg text-gray-900 dark:text-white mb-1">{student.company}</div>
                    <div className="text-sm text-emerald-600 dark:text-emerald-400 mb-2">{student.position}</div>
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">{student.package}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Companies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">🤝 Partner Companies</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerCompanies.map((company, index) => (
              <div 
                key={company.name}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${company.color} flex items-center justify-center text-2xl mb-4`}>
                  {company.logo}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{company.name}</h3>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">{company.industry}</div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Openings:</span>
                  <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{company.openings}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">🚀 How Industry Placement Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-3xl">
                1️⃣
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Skill Assessment</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Complete our comprehensive skill assessments and showcase your expertise
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-3xl">
                2️⃣
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Company Matching</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our AI matches your skills with the perfect company and role
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-3xl">
                3️⃣
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Placement</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get placed in your dream company with competitive packages
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Career?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of students who have successfully placed in top companies through SkillTrove
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/quiz/student" 
                className="px-8 py-3 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Take Assessment
              </a>
              <a 
                href="/login" 
                className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

