"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ResultsPage() {
  const [results, setResults] = useState({
    score: 0,
    totalQuestions: 10,
    correctAnswers: 0,
    timeSpent: "0:00",
    topic: "Aptitude",
    rank: 1,
    percentile: 95
  });

  const [showCertificate, setShowCertificate] = useState(false);

  useEffect(() => {
    // Simulate loading results
    const timer = setTimeout(() => {
      setResults({
        score: 850,
        totalQuestions: 10,
        correctAnswers: 8,
        timeSpent: "4:32",
        topic: "Aptitude",
        rank: 1,
        percentile: 95
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getScoreColor = (score: number) => {
    if (score >= 800) return "from-green-500 to-emerald-500";
    if (score >= 600) return "from-yellow-500 to-orange-500";
    return "from-red-500 to-pink-500";
  };

  const getScoreMessage = (score: number) => {
    if (score >= 800) return "Outstanding Performance! 🎉";
    if (score >= 600) return "Good Job! Keep it up! 👏";
    return "Keep practicing! You'll get there! 💪";
  };

  const achievements = [
    { icon: "🏆", title: "Quiz Master", description: "Scored above 80%", earned: true },
    { icon: "⚡", title: "Speed Demon", description: "Completed in under 5 minutes", earned: true },
    { icon: "🎯", title: "Perfect Aim", description: "Got 8+ questions correct", earned: true },
    { icon: "🔥", title: "Streak Keeper", description: "Maintained learning streak", earned: false }
  ];

  const recommendations = [
    {
      title: "Practice More Aptitude Questions",
      description: "Focus on quantitative reasoning and problem-solving",
      icon: "📊",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Improve Time Management",
      description: "Work on solving questions faster without compromising accuracy",
      icon: "⏰",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Take Advanced Quizzes",
      description: "Challenge yourself with harder difficulty levels",
      icon: "🚀",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-4xl animate-bounce">
            🎉
          </div>
          <h1 className="text-5xl font-bold gradient-text mb-4">Quiz Results</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Congratulations on completing the {results.topic} quiz!
          </p>
        </div>

        {/* Main Results Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700 mb-8">
          <div className="text-center mb-8">
            <div className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r ${getScoreColor(results.score)} flex items-center justify-center text-6xl text-white shadow-lg animate-pulse`}>
              {results.score}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {getScoreMessage(results.score)}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              You scored {results.score} points out of {results.totalQuestions * 100} possible
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
              <div className="text-3xl mb-2">✅</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{results.correctAnswers}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Correct Answers</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200 dark:border-green-800">
              <div className="text-3xl mb-2">⏱️</div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{results.timeSpent}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Time Spent</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-200 dark:border-purple-800">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">#{results.rank}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Your Rank</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl border border-yellow-200 dark:border-yellow-800">
              <div className="text-3xl mb-2">📊</div>
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{results.percentile}%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Percentile</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowCertificate(true)}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🏆 Download Certificate
            </button>
            <Link 
              href="/quiz/student"
              className="px-8 py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              🔄 Retake Quiz
            </Link>
            <Link 
              href="/leaderboard"
              className="px-8 py-4 border-2 border-purple-500 text-purple-600 dark:text-purple-400 rounded-full font-bold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              🏆 View Leaderboard
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Achievements */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="mr-3">🏅</span> Achievements
            </h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`flex items-center p-4 rounded-2xl border transition-all duration-300 ${
                    achievement.earned 
                      ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800' 
                      : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600'
                  }`}
                >
                  <div className={`text-3xl mr-4 ${achievement.earned ? '' : 'grayscale opacity-50'}`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold ${achievement.earned ? 'text-green-800 dark:text-green-200' : 'text-gray-500 dark:text-gray-400'}`}>
                      {achievement.title}
                    </h3>
                    <p className={`text-sm ${achievement.earned ? 'text-green-600 dark:text-green-300' : 'text-gray-400 dark:text-gray-500'}`}>
                      {achievement.description}
                    </p>
                  </div>
                  {achievement.earned && (
                    <div className="text-green-500 text-2xl">✓</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="mr-3">💡</span> Recommendations
            </h2>
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div 
                  key={index}
                  className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl border border-gray-200 dark:border-gray-600 transform hover:scale-102 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${rec.color} flex items-center justify-center text-2xl text-white shadow-lg`}>
                      {rec.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{rec.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{rec.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificate Modal */}
        {showCertificate && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-2xl w-full shadow-2xl">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-4xl">
                  🏆
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Certificate of Achievement</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  This certifies that you have successfully completed the {results.topic} quiz with a score of {results.score} points.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => setShowCertificate(false)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                  >
                    Download PDF
                  </button>
                  <button 
                    onClick={() => setShowCertificate(false)}
                    className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}