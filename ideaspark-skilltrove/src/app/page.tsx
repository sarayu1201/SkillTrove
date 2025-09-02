import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-6xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              SkillTrove
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Learn, reskill, compete, and connect. One platform for students and professionals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/login" 
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started
              </Link>
              <Link 
                href="/skillquest" 
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore SkillQuest
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-gray-50 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Platform Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to master skills and advance your career
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "SkillQuest", 
                desc: "Aptitude, verbal, reasoning, logic building with AI assistant & StoryBot.", 
                href: "/skillquest",
                icon: "🧠",
                color: "from-purple-500 to-pink-500"
              },
              { 
                title: "Student Dashboard", 
                desc: "Personalized learning, progress, quizzes, and certificates.", 
                href: "/dashboards/student",
                icon: "🎓",
                color: "from-blue-500 to-cyan-500"
              },
              { 
                title: "Professional Dashboard", 
                desc: "System design, cloud, leadership, assessments, and certificates.", 
                href: "/dashboards/professional",
                icon: "💼",
                color: "from-green-500 to-emerald-500"
              },
              { 
                title: "Interactive Quizzes", 
                desc: "Secure quizzes with timers, hearts, and scoring.", 
                href: "/quiz/student",
                icon: "🎯",
                color: "from-orange-500 to-red-500"
              },
              { 
                title: "Projects & Internships", 
                desc: "Apply to internships and build real projects.", 
                href: "/projects",
                icon: "🚀",
                color: "from-indigo-500 to-purple-500"
              },
              { 
                title: "Hub & Bounties", 
                desc: "Collaborate in the student-professional hub and claim skill bounties.", 
                href: "/hub",
                icon: "🤝",
                color: "from-teal-500 to-blue-500"
              },
            ].map((f, index) => (
              <Link 
                key={f.title} 
                href={f.href} 
                className="group card-hover bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${f.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {f.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{f.desc}</p>
                <div className="mt-6 flex items-center text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Explore →
                </div>
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
