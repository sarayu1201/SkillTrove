import { prisma } from "@/lib/prisma";

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({ orderBy: { createdAt: "desc" } });
  
  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Build a full-stack e-commerce application with React, Node.js, and MongoDB",
      difficulty: "Intermediate",
      duration: "4 weeks",
      skills: ["React", "Node.js", "MongoDB", "Payment Integration"],
      isOpen: true,
      icon: "🛒"
    },
    {
      id: 2,
      title: "AI Chatbot",
      description: "Create an intelligent chatbot using machine learning and natural language processing",
      difficulty: "Advanced",
      duration: "6 weeks",
      skills: ["Python", "TensorFlow", "NLP", "API Development"],
      isOpen: true,
      icon: "🤖"
    },
    {
      id: 3,
      title: "Mobile App",
      description: "Develop a cross-platform mobile application with React Native",
      difficulty: "Beginner",
      duration: "3 weeks",
      skills: ["React Native", "JavaScript", "Firebase", "UI/UX"],
      isOpen: false,
      icon: "📱"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-green-900 dark:to-blue-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-4xl">
            🚀
          </div>
          <h1 className="text-5xl font-bold gradient-text mb-4">Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Build real-world applications and showcase your skills with industry-relevant projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-6 text-center animate-bounce">{project.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Difficulty:</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {project.difficulty}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Duration:</span>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{project.duration}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Skills Required:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {project.isOpen ? (
                <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  🎯 Start Project
                </button>
              ) : (
                <div className="w-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 py-3 rounded-xl font-semibold text-center">
                  ⏳ Coming Soon
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Database Projects */}
        {projects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Additional Projects</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div 
                  key={project.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  {project.isOpen ? (
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                      Open Project
                    </button>
                  ) : (
                    <span className="text-sm text-gray-500 dark:text-gray-400">Coming soon</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join our community of builders and create projects that will impress employers and advance your career
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/login" 
                className="px-8 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Start Building
              </a>
              <a 
                href="/community" 
                className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300"
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

