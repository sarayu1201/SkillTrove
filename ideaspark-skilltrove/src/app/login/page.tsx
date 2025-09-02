"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [role, setRole] = useState<"student" | "professional">("student");

  return (
    <div className="max-w-md mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">Login</h1>
      <div className="flex gap-2">
        <button onClick={() => setRole("student")} className={`flex-1 border rounded p-2 ${role === "student" ? "bg-foreground text-background" : ""}`}>Student</button>
        <button onClick={() => setRole("professional")} className={`flex-1 border rounded p-2 ${role === "professional" ? "bg-foreground text-background" : ""}`}>Professional</button>
      </div>
      <form className="space-y-3 border rounded p-4">
        <div className="space-y-1">
          <label className="text-sm">Email</label>
          <input type="email" className="w-full border rounded p-2 bg-transparent" placeholder="you@example.com" />
        </div>
        <div className="space-y-1">
          <label className="text-sm">Password</label>
          <input type="password" className="w-full border rounded p-2 bg-transparent" placeholder="••••••••" />
        </div>
        <button type="button" className="w-full border rounded p-2">
          Login as {role}
        </button>
      </form>
      <div className="flex justify-between text-sm">
        <Link href={role === "student" ? "/dashboards/student" : "/dashboards/professional"} className="underline">
          Continue to {role} dashboard →
        </Link>
        <Link href="/">Back home</Link>
      </div>
    </div>
  );
}

