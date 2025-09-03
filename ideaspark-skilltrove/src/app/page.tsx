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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 transition-all duration-500">
      {/* Theme Indicator */}
      <div className="fixed top-4 right-4 z-50">
        <div className="theme-indicator px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-white/30">
          Loading...
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-4xl animate-pulse">
            🚀
          </div>
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              SkillTrove
            </span>
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            The ultimate platform for students and professionals to learn, reskill, compete, and connect. 
            Master aptitude, reasoning, and coding with AI-powered learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Why Choose SkillTrove?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link 
                key={feature.title}
                href={feature.link}
                className="group block"
              >
                <div 
                  className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 transform group-hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-3xl text-white mb-6 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">SkillTrove by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
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

        {/* Partner Companies */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companies.map((company, index) => (
              <div 
                key={company.name}
                className="text-center transform hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${company.color} flex items-center justify-center text-3xl text-white shadow-lg`}>
                  {company.logo}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{company.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Skills?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join thousands of learners who have already transformed their careers with SkillTrove
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/login" 
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🚀 Start Learning
              </Link>
              <Link 
                href="/skillquest" 
                className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                🎯 Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}