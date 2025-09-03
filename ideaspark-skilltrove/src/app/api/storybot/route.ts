import { NextRequest } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { topic } = body as { topic?: string };
  
  if (!process.env.GEMINI_API_KEY) {
    return new Response("Gemini API key missing", { status: 500 });
  }
  
  if (!topic) {
    return new Response("topic required", { status: 400 });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent([
      "Turn learning topics into engaging short stories for better retention. Make them fun, memorable, and educational.",
      `Create a short story to teach: ${topic}`
    ]);

    const response = await result.response;
    const story = response.text();
    
    return Response.json({ story });
  } catch (error) {
    console.error("StoryBot Error:", error);
    return new Response("Failed to generate story", { status: 500 });
  }
}

