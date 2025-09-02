export default function AboutPage() {
  const team = [
    "VinayaSarayu Allampalli",
    "Vedhika Eshani Basa",
    "Prashanth",
    "Gupta",
    "Vamsi",
    "Sriram",
    "Mahita",
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">About SkillTrove</h1>
      <p className="opacity-90">
        SkillTrove is a learning and reskilling platform for students and professionals.
        We bring AI-driven learning, secure assessments, real-world projects, and a collaborative hub
        to accelerate your growth.
      </p>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Team</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {team.map((name) => (
            <li key={name} className="border rounded p-3">{name}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Mission</h2>
        <p className="opacity-90">
          Empower every learner to master skills through practice, projects, and community.
        </p>
      </section>
    </div>
  );
}

