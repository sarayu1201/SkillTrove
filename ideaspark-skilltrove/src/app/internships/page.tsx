"use client";

import { useState } from "react";

export default function InternshipsPage() {
  const [applied, setApplied] = useState<string | null>(null);
  
  const internships = [
    {
      id: "1",
      title: "Software Development Intern",
      company: "Cisco",
      companyLogo: "🌐",
      description: "Join our team to develop cutting-edge networking solutions and security applications. Work on real projects that impact millions of users worldwide.",
      duration: "6 months",
      location: "San Jose, CA",
      stipend: "$8,000/month",
      skills: ["Python", "React", "Networking", "Cybersecurity"],
      isOpen: true,
      type: "Full-time"
    },
    {
      id: "2",
      title: "AI/ML Research Intern",
      company: "Miracle Software",
      companyLogo: "✨",
      description: "Research and develop innovative AI solutions for enterprise applications. Work with cutting-edge machine learning algorithms and real-world datasets.",
      duration: "4 months",
      location: "Hyderabad, India",
      stipend: "₹45,000/month",
      skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
      isOpen: true,
      type: "Full-time"
    },
    {
      id: "3",
      title: "Cloud Solutions Intern",
      company: "Capgemini",
      companyLogo: "🔷",
      description: "Learn cloud architecture and help enterprises migrate to modern cloud platforms. Work with AWS, Azure, and Google Cloud technologies.",
      duration: "5 months",
      location: "Paris, France",
      stipend: "€3,500/month",
      skills: ["AWS", "Azure", "DevOps", "Python", "Infrastructure"],
      isOpen: true,
      type: "Full-time"
    },
    {
      id: "4",
      title: "Data Analytics Intern",
      company: "TCS",
      companyLogo: "🔴",
      description: "Analyze business data and create insights for strategic decision-making. Work with big data technologies and visualization tools.",
      duration: "6 months",
      location: "Mumbai, India",
      stipend: "₹40,000/month",
      skills: ["Python", "SQL", "Tableau", "Statistics", "Business Intelligence"],
      isOpen: true,
      type: "Full-time"
    },
    {
      id: "5",
      title: "Blockchain Developer Intern",
      company: "Infosys",
      companyLogo: "🔵",
      description: "Develop blockchain solutions for supply chain and financial applications. Work with Ethereum, Hyperledger, and smart contracts.",
      duration: "4 months",
      location: "Bangalore, India",
      stipend: "₹42,000/month",
      skills: ["Blockchain", "Solidity", "Web3", "Smart Contracts", "DApps"],
      isOpen: false,
      type: "Full-time"
    },
    {
      id: "6",
      title: "IoT Solutions Intern",
      company: "Wipro",
      companyLogo: "🟢",
      description: "Build IoT solutions for smart cities and industrial automation. Work with sensors, edge computing, and real-time data processing.",
      duration: "5 months",
      location: "Bangalore, India",
      stipend: "₹38,000/month",
      skills: ["IoT", "Python", "Embedded Systems", "Data Analysis", "Hardware"],
      isOpen: true,
      type: "Full-time"
    }
  ];

  async function apply(id: string) {
    try {
      await fetch("/api/internships/apply", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
      setApplied(id);
    } catch {}
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-4xl">
            💼
          </div>
          <h1 className="text-5xl font-bold gradient-text mb-4">Internships</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Launch your career with top-tier companies and gain real-world experience
          </p>
        </div>

        {/* Internships Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {internships.map((internship, index) => (
            <div 
              key={internship.id}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl animate-pulse">💼</div>
                <div className="text-right">
                  <div className="text-2xl mb-1">{internship.companyLogo}</div>
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">{internship.company}</div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{internship.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">{internship.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Duration:</span>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{internship.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Location:</span>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{internship.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Stipend:</span>
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">{internship.stipend}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Type:</span>
                  <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">{internship.type}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Skills Required:</h4>
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => apply(internship.id)} 
                disabled={!internship.isOpen || applied === internship.id}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  !internship.isOpen 
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed' 
                    : applied === internship.id 
                    ? 'bg-green-500 text-white cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600'
                }`}
              >
                {!internship.isOpen ? "⏳ Closed" : applied === internship.id ? "✅ Applied" : "🎯 Apply Now"}
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Career?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of students who have kickstarted their careers through our internship programs
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/login" 
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Started
              </a>
              <a 
                href="/community" 
                className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

