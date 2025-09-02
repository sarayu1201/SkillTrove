import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold">SkillTrove</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Learn, reskill, compete, and connect. One platform for students and professionals.
        </p>
        <div className="flex justify-center gap-3">
          <Link href="/login" className="px-5 py-2 rounded bg-foreground text-background text-sm font-medium">Login</Link>
          <Link href="/skillquest" className="px-5 py-2 rounded border text-sm font-medium">Explore SkillQuest</Link>
        </div>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { title: "SkillQuest", desc: "Aptitude, verbal, reasoning, logic building with AI assistant & StoryBot.", href: "/skillquest" },
          { title: "Student Dashboard", desc: "Personalized learning, progress, quizzes, and certificates.", href: "/dashboards/student" },
          { title: "Professional Dashboard", desc: "System design, cloud, leadership, assessments, and certificates.", href: "/dashboards/professional" },
          { title: "Quizzes", desc: "Secure quizzes with timers, hearts, and scoring.", href: "/quiz/student" },
          { title: "Projects & Internships", desc: "Apply to internships and build real projects.", href: "/projects" },
          { title: "Hub & Bounties", desc: "Collaborate in the student-professional hub and claim skill bounties.", href: "/hub" },
        ].map((f) => (
          <Link key={f.title} href={f.href} className="group border rounded-lg p-5 hover:border-foreground/50 transition">
            <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
            <p className="opacity-80 text-sm">{f.desc}</p>
          </Link>
        ))}
      </section>

      <section className="rounded-lg border p-6">
        <h2 className="text-2xl font-semibold mb-3">Why SkillTrove?</h2>
        <ul className="list-disc pl-5 space-y-2 opacity-90">
          <li>AI-assisted learning with story-based explanations</li>
          <li>Secure assessments with anti-cheat and certificates</li>
          <li>Real-world projects, internships, and industry connections</li>
          <li>Leaderboards and community-driven growth</li>
        </ul>
      </section>
    </div>
  );
}
