"use client";

import { useEffect, useState } from "react";

export default function HubPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const bounties = [
    { id: 1, title: "Build landing page animation", reward: "₹3000" },
    { id: 2, title: "Create quiz analytics dashboard", reward: "₹5000" },
  ];

  async function send() {
    if (!input.trim()) return;
    const content = input.trim();
    setInput("");
    setMessages((m) => [...m, content]);
    try {
      await fetch("/api/hub/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
    } catch {}
  }

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/hub/message");
        const data = await res.json();
        setMessages(data.messages?.map((m: any) => m.content) || []);
      } catch {}
    })();
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="border rounded p-4 flex flex-col">
        <h2 className="text-xl font-semibold mb-2">Student-Professional Hub</h2>
        <div className="flex-1 border rounded p-3 overflow-auto h-64 bg-black/5 dark:bg-white/5">
          {messages.length === 0 && <p className="text-sm opacity-70">No messages yet. Start the conversation!</p>}
          <ul className="space-y-2">
            {messages.map((m, i) => (
              <li key={i} className="text-sm">{m}</li>
            ))}
          </ul>
        </div>
        <div className="mt-3 flex gap-2">
          <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 border rounded p-2 bg-transparent" placeholder="Type a message" />
          <button onClick={send} className="border rounded px-3">Send</button>
        </div>
      </div>

      <div className="border rounded p-4">
        <h2 className="text-xl font-semibold mb-2">Skill Bounties</h2>
        <ul className="space-y-3">
          {bounties.map((b) => (
            <li key={b.id} className="border rounded p-3 flex items-center justify-between">
              <div>
                <p className="font-medium">{b.title}</p>
                <p className="text-xs opacity-70">Reward: {b.reward}</p>
              </div>
              <button className="border rounded px-3 py-1 text-sm">Claim</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

