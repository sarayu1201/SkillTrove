import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              SkillTrove
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
              Learn, reskill, compete, and connect. One platform for students and professionals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/login" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Get Started
              </Link>
              <Link 
                href="/skillquest" 
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Explore Learning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Platform Features</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to master skills and advance your career
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Learning Hub", 
                desc: "AI-powered learning with aptitude, verbal, reasoning, and logic building.", 
                href: "/skillquest",
                icon: "📚"
              },
              { 
                title: "Student Dashboard", 
                desc: "Track your progress, take quizzes, and earn certificates.", 
                href: "/dashboards/student",
                icon: "🎓"
              },
              { 
                title: "Professional Dashboard", 
                desc: "System design, cloud computing, and leadership assessments.", 
                href: "/dashboards/professional",
                icon: "💼"
              },
              { 
                title: "Interactive Quizzes", 
                desc: "Test your knowledge with secure, timed assessments.", 
                href: "/quiz/student",
                icon: "🎯"
              },
              { 
                title: "Projects", 
                desc: "Build real projects and apply to internships.", 
                href: "/projects",
                icon: "🚀"
              },
              { 
                title: "Community", 
                desc: "Connect with peers and professionals in our hub.", 
                href: "/community",
                icon: "🤝"
              },
            ].map((f, index) => (
              <Link 
                key={f.title} 
                href={f.href} 
                className="group bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 transition-colors duration-200"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{f.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why SkillTrove Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose SkillTrove?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Revolutionizing education with cutting-edge technology and community-driven learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🤖", title: "AI-Powered Learning", desc: "Advanced AI assistant and StoryBot for personalized education" },
              { icon: "🔒", title: "Secure Assessments", desc: "Anti-cheat technology with real-time monitoring and certificates" },
              { icon: "🌐", title: "Real-World Projects", desc: "Industry partnerships and internship opportunities" },
              { icon: "🏆", title: "Community Growth", desc: "Leaderboards, mentorship, and collaborative learning" }
            ].map((item, index) => (
              <div key={item.title} className="text-center animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center text-3xl backdrop-blur-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="opacity-90 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Learning?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students and professionals already advancing their careers with SkillTrove
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/login" 
              className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Start Learning Today
            </Link>
            <Link 
              href="/about" 
              className="px-10 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
