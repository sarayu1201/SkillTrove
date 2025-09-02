"use client";

import { useState, useEffect } from "react";
import { prisma } from "@/lib/prisma";

export default function InternshipsPage() {
  const [applied, setApplied] = useState<string | null>(null);
  const [items, setItems] = useState<{ id: string; title: string; description: string; isOpen: boolean }[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/internships");
        const data = await res.json();
        setItems(data.items || []);
      } catch {}
    })();
  }, []);
  async function apply(id: string) {
    try {
      await fetch("/api/internships/apply", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
      setApplied(id);
    } catch {}
  }
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Internships</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((i) => (
          <div key={i.id} className="border rounded p-4 space-y-2">
            <h3 className="font-semibold">{i.title}</h3>
            <p className="text-sm opacity-80">{i.description}</p>
            <button onClick={() => apply(i.id)} className="border rounded px-3 py-1" disabled={!i.isOpen || applied === i.id}>
              {!i.isOpen ? "Closed" : applied === i.id ? "Applied" : "Apply"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

