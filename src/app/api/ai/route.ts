import { NextResponse, NextRequest } from "next/server";
import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function GET(request: NextRequest) {
  const { text } = await generateText({
    model: openai("gpt-4"),
    system: "You\re a friendly assistant",
    prompt: "Why the sky is blue ?",
  });

  return NextResponse.json({ text });
}
