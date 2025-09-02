import { NextRequest } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { prompt } = body as { prompt?: string };
  if (!process.env.OPENAI_API_KEY) return new Response("OpenAI key missing", { status: 500 });
  if (!prompt) return new Response("prompt required", { status: 400 });

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a helpful learning assistant." },
      { role: "user", content: prompt },
    ],
  });
  const text = completion.choices[0]?.message?.content ?? "";
  return Response.json({ text });
}

