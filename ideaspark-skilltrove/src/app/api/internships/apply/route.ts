import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { id } = await req.json();
  if (!id) return new Response("invalid", { status: 400 });
  // Anonymous application for demo
  const user = await prisma.user.create({ data: { name: "Applicant" } });
  await prisma.application.create({ data: { internshipId: id, userId: user.id } });
  return Response.json({ ok: true });
}

