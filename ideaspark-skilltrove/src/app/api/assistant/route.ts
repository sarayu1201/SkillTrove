import { NextRequest } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { prompt } = body as { prompt?: string };
  
  if (!process.env.GEMINI_API_KEY) {
    return new Response("Gemini API key missing", { status: 500 });
  }
  
  if (!prompt) {
    return new Response("prompt required", { status: 400 });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent([
      "You are a helpful learning assistant. Provide clear, engaging explanations.",
      prompt
    ]);

    const response = await result.response;
    const text = response.text();
    
    return Response.json({ text });
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return new Response("Failed to generate response", { status: 500 });
  }
}

