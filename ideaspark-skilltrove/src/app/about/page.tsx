export default function AboutPage() {
  const team = [
    { name: "VinayaSarayu Allampalli", role: "Founder & CEO", avatar: "👩‍💼" },
    { name: "Vedhika Eshani Basa", role: "CTO", avatar: "👩‍💻" },
    { name: "Prashanth", role: "Lead Developer", avatar: "👨‍💻" },
    { name: "Gupta", role: "Product Manager", avatar: "👨‍💼" },
    { name: "Vamsi", role: "UI/UX Designer", avatar: "👨‍🎨" },
    { name: "Sriram", role: "Data Scientist", avatar: "👨‍🔬" },
    { name: "Mahita", role: "Marketing Lead", avatar: "👩‍💼" },
  ];

  const features = [
    { icon: "🤖", title: "AI-Powered Learning", desc: "Advanced AI assistant and StoryBot for personalized education" },
    { icon: "🔒", title: "Secure Assessments", desc: "Anti-cheat technology with real-time monitoring" },
    { icon: "🌐", title: "Real-World Projects", desc: "Industry partnerships and internship opportunities" },
    { icon: "🏆", title: "Community Growth", desc: "Leaderboards, mentorship, and collaborative learning" },
    { icon: "📊", title: "Progress Tracking", desc: "Detailed analytics and performance insights" },
    { icon: "🎯", title: "Skill Certification", desc: "Industry-recognized certificates with founder signature" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl font-bold gradient-text mb-6">About SkillTrove</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            SkillTrove is a revolutionary learning and reskilling platform for students and professionals.
            We bring AI-driven learning, secure assessments, real-world projects, and a collaborative hub
            to accelerate your growth and career success.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl">
                🎯
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Empower every learner to master skills through practice, projects, and community. 
                We believe in making quality education accessible, engaging, and effective for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Why Choose SkillTrove?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 animate-bounce">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4 animate-pulse">{member.avatar}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="animate-fadeInUp">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-blue-200">Students Enrolled</div>
              </div>
              <div className="animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-200">Professionals</div>
              </div>
              <div className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-200">Projects Completed</div>
              </div>
              <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-blue-200">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Start Your Journey?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are already advancing their careers with SkillTrove
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/login" 
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a 
                href="/skillquest" 
                className="px-8 py-3 border-2 border-purple-500 text-purple-600 dark:text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Explore Learning
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

