import { prisma } from "@/lib/prisma";

export async function GET() {
  // Seed one dummy internship if none exist
  const count = await prisma.internship.count();
  if (count === 0) {
    await prisma.internship.create({ data: { title: "SkillTrove - Product Intern (Dummy)", description: "Help build engaging learning experiences. Duration: 8 weeks.", isOpen: true } });
  }
  const items = await prisma.internship.findMany({ orderBy: { createdAt: "desc" } });
  return Response.json({ items });
}

