export default function AboutPage() {
  const teamMembers = [
    {
      name: "VinayaSarayu",
      role: "Founder & CEO",
      avatar: "👩‍💼",
      description: "Visionary leader driving SkillTrove's mission to revolutionize education and career development",
      expertise: ["Strategic Planning", "Product Vision", "Team Leadership"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Vedhikaeshani",
      role: "CTO & Head of Technology",
      avatar: "👩‍💻",
      description: "Technology expert leading our AI-powered learning platform and innovative solutions",
      expertise: ["AI/ML", "System Architecture", "Product Development"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Mahita Sree",
      role: "Head of Learning & Content",
      avatar: "👩‍🎓",
      description: "Educational specialist curating world-class learning content and curriculum design",
      expertise: ["Curriculum Design", "Educational Psychology", "Content Strategy"],
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Praanth",
      role: "Head of Business Development",
      avatar: "👨‍💼",
      description: "Business strategist building partnerships and expanding SkillTrove's global reach",
      expertise: ["Partnerships", "Market Strategy", "Business Growth"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "2024", label: "Founded", icon: "🎯" },
    { number: "10,000+", label: "Active Learners", icon: "👥" },
    { number: "50+", label: "Partner Companies", icon: "🏢" },
    { number: "95%", label: "Success Rate", icon: "🎯" }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Excellence",
      description: "We strive for excellence in everything we do, from content quality to user experience"
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Building a community where students and professionals learn and grow together"
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Leveraging cutting-edge technology to create the future of education"
    },
    {
      icon: "💡",
      title: "Empowerment",
      description: "Empowering individuals to take control of their learning and career journey"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl animate-pulse">
            🏢
          </div>
          <h1 className="text-5xl font-bold gradient-text mb-4">About SkillTrove</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Revolutionizing education through AI-powered learning, industry partnerships, and community-driven growth
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                To bridge the gap between education and industry by providing students and professionals with the skills, 
                knowledge, and opportunities they need to succeed in today's rapidly evolving world. We believe that 
                everyone deserves access to quality education and career advancement opportunities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🎯 What We Do</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Provide AI-powered learning experiences for skill development
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Connect students with industry professionals and opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Offer real-world projects and internship placements
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Build a supportive community for continuous learning
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🌟 Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  To become the world's leading platform for skill development and career advancement, 
                  empowering millions of learners to achieve their dreams and transform their lives.
                </p>
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">🎯 2025 Goals</h4>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• Reach 100,000+ active learners</li>
                    <li>• Partner with 100+ top companies</li>
                    <li>• Launch mobile applications</li>
                    <li>• Expand to international markets</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">SkillTrove by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center transform hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Meet Our Amazing Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The brilliant minds behind SkillTrove, dedicated to transforming education and empowering learners worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${member.color} flex items-center justify-center text-3xl text-white shadow-lg`}>
                  {member.avatar}
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold">{member.role}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center mb-6 leading-relaxed">
                  {member.description}
                </p>
                <div className="space-y-2">
                  {member.expertise.map((skill, idx) => (
                    <div key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-center">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do at SkillTrove
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Why Choose SkillTrove?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover what makes us the preferred choice for learners and professionals worldwide
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl text-white">
                  🤖
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">AI-Powered Learning</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Advanced AI assistant and StoryBot for personalized, engaging learning experiences
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-2xl text-white">
                  🔒
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Secure Assessments</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Anti-cheat technology with real-time monitoring and verified certificates
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl text-white">
                  🌐
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Industry Partnerships</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Direct connections with top companies for internships and career opportunities
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-2xl text-white">
                  🏆
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Community Growth</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Leaderboards, mentorship programs, and collaborative learning environments
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl text-white">
                  📱
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Modern Technology</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Built with Next.js, AI integration, and responsive design for the best user experience
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-2xl text-white">
                  🎯
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Proven Results</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  95% success rate with thousands of learners achieving their career goals
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Join the SkillTrove Family?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Start your learning journey today and become part of our growing community of successful learners
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/login" 
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🚀 Get Started
              </a>
              <a 
                href="/community" 
                className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                💬 Join Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

