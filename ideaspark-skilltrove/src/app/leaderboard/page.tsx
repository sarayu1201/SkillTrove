import { prisma } from "@/lib/prisma";

export default async function LeaderboardPage() {
  const students = await prisma.quizResult.findMany({
    where: { role: "STUDENT" },
    orderBy: { score: "desc" },
    take: 10,
    include: { user: true },
  });
  const pros = await prisma.quizResult.findMany({
    where: { role: "PROFESSIONAL" },
    orderBy: { score: "desc" },
    take: 10,
    include: { user: true },
  });

  const getRankIcon = (index: number) => {
    if (index === 0) return "🥇";
    if (index === 1) return "🥈";
    if (index === 2) return "🥉";
    return `#${index + 1}`;
  };

  const getRankColor = (index: number) => {
    if (index === 0) return "from-yellow-400 to-yellow-600";
    if (index === 1) return "from-gray-300 to-gray-500";
    if (index === 2) return "from-orange-400 to-orange-600";
    return "from-purple-400 to-purple-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-4xl">
            🏆
          </div>
          <h1 className="text-5xl font-bold gradient-text mb-4">Global Leaderboard</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how you stack up against the best learners worldwide
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Students Leaderboard */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl mr-4">
                🎓
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Students</h2>
                <p className="text-gray-600 dark:text-gray-300">Top performing students</p>
              </div>
            </div>

            <div className="space-y-4">
              {students.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">📚</div>
                  <p className="text-gray-500 dark:text-gray-400">No student scores yet. Be the first!</p>
                </div>
              ) : (
                students.map((student, index) => (
                  <div key={student.id} className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                    index < 3 
                      ? 'bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-700' 
                      : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${getRankColor(index)} flex items-center justify-center text-white font-bold text-lg mr-4`}>
                          {getRankIcon(index)}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                            {student.user?.name ?? "Anonymous"}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {student.topic} • {new Date(student.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{student.score}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">points</div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Professionals Leaderboard */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-xl mr-4">
                💼
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Professionals</h2>
                <p className="text-gray-600 dark:text-gray-300">Top performing professionals</p>
              </div>
            </div>

            <div className="space-y-4">
              {pros.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">💼</div>
                  <p className="text-gray-500 dark:text-gray-400">No professional scores yet. Be the first!</p>
                </div>
              ) : (
                pros.map((pro, index) => (
                  <div key={pro.id} className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                    index < 3 
                      ? 'bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-700' 
                      : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${getRankColor(index)} flex items-center justify-center text-white font-bold text-lg mr-4`}>
                          {getRankIcon(index)}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                            {pro.user?.name ?? "Anonymous"}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {pro.topic} • {new Date(pro.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{pro.score}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">points</div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Climb the Ranks?</h2>
          <p className="text-xl mb-6 opacity-90">Take a quiz and see your name on the leaderboard!</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/quiz/student" className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Student Quiz
            </a>
            <a href="/quiz/professional" className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
              Professional Quiz
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

