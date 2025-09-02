"use client";

import { useState } from "react";

const topics = [
  {
    title: "Aptitude",
    points: ["Percentages", "Ratios & Proportions", "Time & Work", "Profit & Loss"],
  },
  {
    title: "Verbal",
    points: ["Reading Comprehension", "Synonyms/Antonyms", "Sentence Correction"],
  },
  {
    title: "Reasoning",
    points: ["Puzzles", "Syllogisms", "Series", "Directions"],
  },
  {
    title: "Logic Building",
    points: ["Patterns", "Abstractions", "Problem Decomposition"],
  },
];

export default function SkillQuestPage() {
  const [input, setInput] = useState("");
  const [story, setStory] = useState("");

  async function handleAsk() {
    const res = await fetch("/api/storybot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic: input }),
    });
    const data = await res.json();
    setStory(data.story || "");
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">SkillQuest</h1>
      <p className="opacity-90">Key highlights across aptitude, verbal, reasoning, and logic building.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {topics.map((t) => (
          <div key={t.title} className="border rounded p-4">
            <h3 className="font-semibold mb-2">{t.title}</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {t.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border rounded p-4 space-y-3">
        <h2 className="text-xl font-semibold">AI Assistant</h2>
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a concept..."
            className="flex-1 border rounded p-2 bg-transparent"
          />
          <button onClick={handleAsk} className="border rounded px-3">Ask</button>
        </div>
        {story && (
          <div className="rounded border p-3 bg-black/5 dark:bg-white/5">
            <p className="whitespace-pre-wrap text-sm">{story}</p>
          </div>
        )}
        <p className="text-xs opacity-70">Story mode powered by StoryBot (placeholder).</p>
      </div>
    </div>
  );
}

