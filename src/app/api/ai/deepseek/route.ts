import { NextResponse, NextRequest } from "next/server";
import { generateText } from "ai";
import { createDeepSeek } from "@ai-sdk/deepseek";

const deepseek = createDeepSeek({
  apiKey: process.env.DEEPSEEK_API_KEY ?? "",
});

export async function GET(request: NextRequest) {
  console.log("Running at url", request.nextUrl.pathname);

  try {
    const { text } = await generateText({
      model: deepseek("deepseek-chat"),
      system: "You\re a friendly assistant",
      prompt: "Why the sky is blue ?",
    });

    return NextResponse.json({ text });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}
