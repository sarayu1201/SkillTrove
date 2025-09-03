"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="border-b border-black/10 dark:border-white/10 sticky top-0 z-40 bg-background/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl gradient-text">SkillTrove</Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About Us</Link>
          <Link href="/dashboards/student" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Dashboards</Link>
          <Link href="/skillquest" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Learning</Link>
          <Link href="/community" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Community</Link>
          <Link href="/projects" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Projects</Link>
        </nav>
        <div className="flex items-center gap-3">
          {session ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Welcome, {session.user?.name || session.user?.email}
              </span>
              <Link 
                href={session.user?.role === "STUDENT" ? "/dashboards/student" : "/dashboards/professional"} 
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg text-sm font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
              >
                Dashboard
              </Link>
              <button 
                onClick={() => signOut()} 
                className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg text-sm font-medium hover:from-red-600 hover:to-pink-600 transition-all duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login" className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              Login
            </Link>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}