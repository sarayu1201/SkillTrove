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
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="border rounded p-4">
        <h2 className="text-xl font-semibold mb-3">Students</h2>
        <ol className="space-y-2">
          {students.map((s, i) => (
            <li key={s.id} className="flex justify-between border rounded p-2"><span>{i + 1}. {s.user?.name ?? "Anonymous"}</span><span>{s.score}</span></li>
          ))}
        </ol>
      </div>
      <div className="border rounded p-4">
        <h2 className="text-xl font-semibold mb-3">Professionals</h2>
        <ol className="space-y-2">
          {pros.map((s, i) => (
            <li key={s.id} className="flex justify-between border rounded p-2"><span>{i + 1}. {s.user?.name ?? "Anonymous"}</span><span>{s.score}</span></li>
          ))}
        </ol>
      </div>
    </div>
  );
}

