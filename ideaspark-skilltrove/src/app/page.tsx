"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function HomePage() {
  // Theme indicator effect
  useEffect(() => {
    const updateThemeIndicator = () => {
      const indicator = document.querySelector('.theme-indicator');
      if (indicator) {
        const isDark = document.documentElement.classList.contains('dark');
        indicator.textContent = isDark ? 'Dark' : 'Light';
      }
    };

    // Update on mount
    updateThemeIndicator();

    // Listen for theme changes
    const observer = new MutationObserver(updateThemeIndicator);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "🎓",
      title: "Student Learning",
      description: "Master aptitude, verbal, reasoning, and coding with interactive modules and AI assistance",
      link: "/skillquest",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "💼",
      title: "Professional Development",
      description: "Advance your career with system design, cloud computing, and leadership training",
      link: "/learn/professional",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "🎯",
      title: "Interactive Quizzes",
      description: "Test your skills with gamified quizzes featuring anti-cheat protection and certificates",
      link: "/quiz/student",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "🏆",
      title: "Leaderboards",
      description: "Compete with peers and track your progress on global leaderboards",
      link: "/leaderboard",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: "🤝",
      title: "Student-Professional Hub",
      description: "Connect with mentors, collaborate on projects, and claim skill bounties",
      link: "/hub",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: "🏢",
      title: "Industry Placement",
      description: "Get placed in top companies with our industry partnerships and placement programs",
      link: "/industry",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: "📁",
      title: "Projects & Internships",
      description: "Work on real projects and secure internships with leading tech companies",
      link: "/projects",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: "💬",
      title: "Community",
      description: "Join discussions, share knowledge, and get feedback from the SkillTrove community",
      link: "/community",
      color: "from-rose-500 to-pink-500"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Learners", icon: "👥" },
    { number: "500+", label: "Projects Completed", icon: "📊" },
    { number: "50+", label: "Partner Companies", icon: "🏢" },
    { number: "95%", label: "Success Rate", icon: "🎯" }
  ];

  const companies = [
    { name: "Cisco", logo: "🌐", color: "from-blue-500 to-cyan-500" },
    { name: "Miracle Software", logo: "✨", color: "from-purple-500 to-pink-500" },
    { name: "Capgemini", logo: "🔷", color: "from-indigo-500 to-blue-500" },
    { name: "TCS", logo: "🔴", color: "from-red-500 to-pink-500" },
    { name: "Infosys", logo: "🔵", color: "from-blue-500 to-indigo-500" },
    { name: "Wipro", logo: "🟢", color: "from-green-500 to-emerald-500" }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 transition-all duration-500">
              {/* Theme Indicator */}
        <div className="fixed top-4 right-4 z-50 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white">
          <span className="mr-2">🌙</span>
          <span className="font-semibold">Theme: </span>
          <span className="theme-indicator">Light</span>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center relative z-10">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-6xl animate-bounce">
              🚀
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                SkillTrove
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Your gateway to <span className="font-semibold text-purple-600 dark:text-purple-400">student success</span> and <span className="font-semibold text-blue-600 dark:text-blue-400">professional growth</span>
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              Master essential skills, connect with industry professionals, and accelerate your career with our comprehensive learning platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/login" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-bold text-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🚀 Get Started
              </Link>
              <Link 
                href="/about" 
                className="px-8 py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                📖 Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-20 animate-pulse"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
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
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From foundational learning to advanced professional development, SkillTrove provides comprehensive tools for your growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link 
                key={index}
                href={feature.link}
                className="group block"
              >
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 transform group-hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-3xl text-white`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Company Partners Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Partner with top companies and accelerate your career with real-world opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companies.map((company, index) => (
              <div 
                key={index}
                className="text-center transform hover:scale-110 transition-all duration-300"
              >
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${company.color} flex items-center justify-center text-3xl text-white shadow-lg`}>
                  {company.logo}
                </div>
                <div className="font-semibold text-gray-900 dark:text-white">{company.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Whether you're a student starting your journey or a professional looking to upskill, we have the perfect path for you
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Student Path */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-8 border border-blue-200 dark:border-blue-700">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-4xl text-white">
                  🎓
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Student Learning</h3>
                <p className="text-gray-600 dark:text-gray-300">Build strong foundations for your future career</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-3">✓</div>
                  <span className="text-gray-700 dark:text-gray-300">Aptitude & Reasoning Skills</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-3">✓</div>
                  <span className="text-gray-700 dark:text-gray-300">Verbal & Communication</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-3">✓</div>
                  <span className="text-gray-700 dark:text-gray-300">Logic Building & Problem Solving</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-3">✓</div>
                  <span className="text-gray-700 dark:text-gray-300">Coding Fundamentals</span>
                </div>
              </div>
              
              <Link 
                href="/skillquest"
                className="block w-full text-center py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Learning →
              </Link>
            </div>

            {/* Professional Path */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 border border-purple-200 dark:border-purple-700">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl text-white">
                  💼
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Professional Development</h3>
                <p className="text-gray-600 dark:text-gray-300">Advance your career with industry-relevant skills</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm mr-3">✓</div>
                  <span className="text-gray-700 dark:text-gray-300">System Design & Architecture</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm mr-3">✓</div>
                  <span className="text-gray-700 dark:text-gray-300">Cloud Computing & DevOps</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm mr-3">✓</div>
                  <span className="text-gray-700 dark:text-gray-300">Leadership & Management</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm mr-3">✓</div>
                  <span className="text-gray-700 dark:text-gray-300">Industry Best Practices</span>
                </div>
              </div>
              
              <Link 
                href="/learn/professional"
                className="block w-full text-center py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Learning →
              </Link>
            </div>
          </div>
        </div>
      </section>

              {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Future?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Join thousands of learners who have already accelerated their careers with SkillTrove. Start your journey today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/login" 
                  className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  🚀 Get Started Now
                </Link>
                <Link 
                  href="/about" 
                  className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  📖 Meet Our Team
                </Link>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}
