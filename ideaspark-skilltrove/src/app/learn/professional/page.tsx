export default function ProfessionalLearningPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Professional Learning</h1>
        <p className="opacity-80 max-w-2xl">Deepen your expertise with curated learning paths in system design, cloud computing, and leadership.</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="border rounded p-5 space-y-3">
          <h2 className="text-xl font-semibold">System Design</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Scalability: load balancing, partitioning, replication</li>
            <li>Storage: SQL vs NoSQL, indexing, caching layers</li>
            <li>Availability & Consistency: CAP, quorum, retries</li>
            <li>Observability: metrics, tracing, alerting</li>
          </ul>
          <div className="flex gap-2 text-sm">
            <a className="border rounded px-3 py-1" href="#">Sample Case Study</a>
            <a className="border rounded px-3 py-1" href="#">Design Exercises</a>
          </div>
        </div>

        <div className="border rounded p-5 space-y-3">
          <h2 className="text-xl font-semibold">Cloud Computing</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Compute: containers, serverless, autoscaling</li>
            <li>Networking: VPC, gateways, security groups</li>
            <li>Data: object stores, managed databases, streaming</li>
            <li>Cost & Security: tagging, budgets, IAM</li>
          </ul>
          <div className="flex gap-2 text-sm">
            <a className="border rounded px-3 py-1" href="#">Cloud Labs</a>
            <a className="border rounded px-3 py-1" href="#">Best Practices</a>
          </div>
        </div>
      </section>

      <section className="border rounded p-5 space-y-3">
        <h2 className="text-xl font-semibold">Leadership Qualities</h2>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Communication: clarity, stakeholder alignment, feedback</li>
          <li>Execution: prioritization, delegation, delivery habits</li>
          <li>People: mentoring, hiring, performance growth</li>
          <li>Strategy: vision, roadmaps, measurable outcomes</li>
        </ul>
        <div className="flex gap-2 text-sm">
          <a className="border rounded px-3 py-1" href="#">Leadership Toolkit</a>
          <a className="border rounded px-3 py-1" href="#">Scenario Playbooks</a>
        </div>
      </section>

      <section className="border rounded p-5 space-y-3">
        <h2 className="text-xl font-semibold">Next Steps</h2>
        <p className="text-sm opacity-90">Test your knowledge with a quick assessment and earn a SkillTrove certificate.</p>
        <div className="flex gap-2 text-sm">
          <a className="border rounded px-3 py-1" href="/quiz/professional">Start Assessment</a>
          <a className="border rounded px-3 py-1" href="/projects">Explore Projects</a>
        </div>
      </section>
    </div>
  );
}

