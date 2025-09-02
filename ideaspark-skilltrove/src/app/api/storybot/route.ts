import { NextRequest } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { topic } = body as { topic?: string };
  if (!process.env.OPENAI_API_KEY) return new Response("OpenAI key missing", { status: 500 });
  if (!topic) return new Response("topic required", { status: 400 });

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Turn learning topics into engaging short stories for better retention." },
      { role: "user", content: `Create a short story to teach: ${topic}` },
    ],
  });
  const text = completion.choices[0]?.message?.content ?? "";
  return Response.json({ story: text });
}

