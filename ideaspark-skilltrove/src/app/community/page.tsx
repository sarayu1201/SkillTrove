"use client";

import { useState } from "react";

export default function CommunityPage() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">SkillTrove Community</h1>
      <p className="opacity-90">Join our community, share ideas, and help us improve.
      </p>
      <div className="border rounded p-4 space-y-3 max-w-xl">
        <h2 className="text-xl font-semibold">Feedback</h2>
        <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} className="w-full min-h-32 border rounded p-2 bg-transparent" placeholder="Your feedback helps us a lot" />
        <button className="border rounded px-3 py-1" onClick={() => setSubmitted(true)} disabled={submitted || feedback.trim().length === 0}>
          {submitted ? "Submitted" : "Submit"}
        </button>
      </div>
    </div>
  );
}

