import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const messages = await prisma.message.findMany({ orderBy: { createdAt: "asc" } });
  return Response.json({ messages });
}

export async function POST(req: NextRequest) {
  const { content } = await req.json();
  if (!content || typeof content !== "string") return new Response("invalid", { status: 400 });
  const msg = await prisma.message.create({ data: { content } });
  return Response.json({ ok: true, id: msg.id });
}

