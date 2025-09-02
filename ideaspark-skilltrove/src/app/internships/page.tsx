"use client";

import { useState } from "react";

export default function InternshipsPage() {
  const [applied, setApplied] = useState(false);
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Internships</h1>
      <div className="border rounded p-4 space-y-2">
        <h3 className="font-semibold">SkillTrove - Product Intern (Dummy)</h3>
        <p className="text-sm opacity-80">Help build engaging learning experiences. Duration: 8 weeks.</p>
        <button onClick={() => setApplied(true)} className="border rounded px-3 py-1" disabled={applied}>
          {applied ? "Applied" : "Apply"}
        </button>
      </div>
    </div>
  );
}

