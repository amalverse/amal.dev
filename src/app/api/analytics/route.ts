import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const event = await req.json();

    // In a real-world scenario, you would save this event to a database
    // or send it to an analytics service like Vercel Analytics.
    console.log("Analytics Event:", event);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error in analytics API:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
