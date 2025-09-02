"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [role, setRole] = useState<"student" | "professional">("student");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 animate-fadeInUp">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold gradient-text mb-2">Welcome Back</h1>
            <p className="text-gray-600 dark:text-gray-300">Sign in to continue your learning journey</p>
          </div>

          {/* Role Selection */}
          <div className="flex gap-2 mb-8 bg-gray-100 dark:bg-gray-700 rounded-2xl p-1">
            <button 
              onClick={() => setRole("student")} 
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                role === "student" 
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105" 
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              🎓 Student
            </button>
            <button 
              onClick={() => setRole("professional")} 
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                role === "professional" 
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105" 
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              💼 Professional
            </button>
          </div>

          {/* Login Form */}
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
              <input 
                type="email" 
                className="w-full border-2 border-gray-200 dark:border-gray-600 rounded-xl p-4 bg-transparent focus:border-purple-500 focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 transition-all duration-300" 
                placeholder="you@example.com" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Password</label>
              <input 
                type="password" 
                className="w-full border-2 border-gray-200 dark:border-gray-600 rounded-xl p-4 bg-transparent focus:border-purple-500 focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 transition-all duration-300" 
                placeholder="••••••••" 
              />
            </div>
            <button 
              type="button" 
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Sign in as {role}
            </button>
          </form>

          {/* Quick Access Links */}
          <div className="mt-8 space-y-4">
            <div className="text-center">
              <Link 
                href={role === "student" ? "/dashboards/student" : "/dashboards/professional"} 
                className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300"
              >
                Continue to {role} dashboard →
              </Link>
            </div>
            <div className="text-center">
              <Link 
                href="/" 
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-300"
              >
                ← Back to home
              </Link>
            </div>
          </div>

          {/* Demo Note */}
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-700 dark:text-blue-300 text-center">
              💡 Demo mode: Click "Continue to dashboard" to explore features
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

