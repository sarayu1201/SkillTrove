import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkillTrove | IdeaSpark Startup Expo",
  description: "SkillTrove: Learn, Reskill, Compete, and Connect.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen`}>        
        <ThemeProvider>
          <header className="border-b border-black/10 dark:border-white/10 sticky top-0 z-40 bg-background/80 backdrop-blur">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
              <Link href="/" className="font-semibold text-lg">SkillTrove</Link>
              <nav className="hidden md:flex gap-4 text-sm">
                <Link href="/about">About</Link>
                <Link href="/login">Login</Link>
                <Link href="/dashboards/student">Student</Link>
                <Link href="/dashboards/professional">Professional</Link>
                <Link href="/skillquest">SkillQuest</Link>
                <Link href="/quiz/student">Student Quiz</Link>
                <Link href="/quiz/professional">Pro Quiz</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/internships">Internships</Link>
                <Link href="/industry">Industry</Link>
                <Link href="/hub">Hub</Link>
                <Link href="/leaderboard">Leaderboard</Link>
                <Link href="/community">Community</Link>
              </nav>
              <div className="flex items-center gap-2">
                <ThemeToggle />
              </div>
            </div>
          </header>
          <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
          <footer className="border-t border-black/10 dark:border-white/10 py-6 mt-8">
            <div className="max-w-6xl mx-auto px-4 text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
              <p>© {new Date().getFullYear()} SkillTrove. All rights reserved.</p>
              <p className="opacity-70">Founder: A. VinayaSarayu</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
