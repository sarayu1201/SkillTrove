import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { role, topic, score, userId } = body as { role?: "STUDENT" | "PROFESSIONAL"; topic?: string; score?: number; userId?: string };
  if (!role || !topic || typeof score !== "number") return new Response("invalid", { status: 400 });

  // Note: for demo, allow anonymous by creating a placeholder user if userId missing
  let uid = userId;
  if (!uid) {
    const anon = await prisma.user.create({ data: { name: "Guest", role: role === "STUDENT" ? "STUDENT" : "PROFESSIONAL" } });
    uid = anon.id;
  }

  await prisma.quizResult.create({ data: { userId: uid!, role: role as any, topic, score } });
  return Response.json({ ok: true });
}

