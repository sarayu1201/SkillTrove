import Link from "next/link";

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Student Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link className="border rounded p-4" href="/skillquest">SkillQuest</Link>
        <Link className="border rounded p-4" href="/quiz/student">Take Quiz</Link>
        <Link className="border rounded p-4" href="/projects">Projects</Link>
        <Link className="border rounded p-4" href="/internships">Internships</Link>
        <Link className="border rounded p-4" href="/leaderboard">Leaderboard</Link>
        <Link className="border rounded p-4" href="/hub">Student-Professional Hub</Link>
      </div>
    </div>
  );
}

