import Link from "next/link";

export default function ProfessionalDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Professional Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link className="border rounded p-4" href="/learn/professional">Learning</Link>
        <Link className="border rounded p-4" href="/quiz/professional">Assessments</Link>
        <Link className="border rounded p-4" href="/projects">Projects</Link>
        <Link className="border rounded p-4" href="/hub">Student-Professional Hub</Link>
        <Link className="border rounded p-4" href="/leaderboard">Leaderboard</Link>
        <Link className="border rounded p-4" href="/industry">Industry Setup</Link>
      </div>
    </div>
  );
}

