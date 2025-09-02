export default function LeaderboardPage() {
  const students = [
    { name: "Alex", score: 95 },
    { name: "Riya", score: 92 },
    { name: "Sam", score: 90 },
  ];
  const pros = [
    { name: "Dev A", score: 97 },
    { name: "Dev B", score: 94 },
    { name: "Dev C", score: 91 },
  ];
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="border rounded p-4">
        <h2 className="text-xl font-semibold mb-3">Students</h2>
        <ol className="space-y-2">
          {students.map((s, i) => (
            <li key={s.name} className="flex justify-between border rounded p-2"><span>{i + 1}. {s.name}</span><span>{s.score}</span></li>
          ))}
        </ol>
      </div>
      <div className="border rounded p-4">
        <h2 className="text-xl font-semibold mb-3">Professionals</h2>
        <ol className="space-y-2">
          {pros.map((s, i) => (
            <li key={s.name} className="flex justify-between border rounded p-2"><span>{i + 1}. {s.name}</span><span>{s.score}</span></li>
          ))}
        </ol>
      </div>
    </div>
  );
}

