import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Gemini API key not configured" },
      { status: 500 }
    );
  }

  let prompt: string;
  try {
    const body = await req.json();
    prompt = String(body.prompt ?? "");
    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  try {
    // Fetch dynamic context from the ai-context endpoint
    const contextRes = await fetch(`${req.nextUrl.origin}/api/ai-context`);
    const context = await contextRes.json();

    const systemPrompt = `You are a helpful assistant for a portfolio website belonging to Amal Kishor.
Your name is "Amal's Assistant".
You are friendly and professional.
Here is some context about Amal:
${JSON.stringify(context)}
Keep your responses concise and helpful. Never mention that you are an AI model.
Focus on Amal's skills, projects, and professional background.`;

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: systemPrompt,
    });

    const chat = model.startChat();
    const result = await chat.sendMessage(prompt);
    const text = result.response.text();

    return NextResponse.json({ response: text });
  } catch (error) {
    console.error("Error in chat API:", error);
    // Fallback without system instruction
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const fallbackModel = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });
      const result = await fallbackModel.generateContent(prompt);
      const text = result.response.text();
      return NextResponse.json({ response: text });
    } catch (fallbackError) {
      console.error("Fallback model also failed:", fallbackError);
      return NextResponse.json(
        { response: "Sorry, I'm temporarily unavailable. Please try again later." },
        { status: 200 }
      );
    }
  }
}
