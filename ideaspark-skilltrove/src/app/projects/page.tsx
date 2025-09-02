import { prisma } from "@/lib/prisma";

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div key={p.id} className="border rounded p-4">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm opacity-80 mb-3">{p.description}</p>
            {p.isOpen ? (
              <button className="border rounded px-3 py-1">Open Project</button>
            ) : (
              <span className="text-xs opacity-70">Coming soon</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

