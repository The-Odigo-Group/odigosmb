import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_ADDRESS = "smb@theodigogroup.com";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Email isn't configured yet." }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const trade = typeof body.trade === "string" ? body.trade.trim() : "";
  const source = typeof body.source === "string" ? body.source.trim() : "";
  const notes = typeof body.notes === "string" ? body.notes.trim() : "";
  const marketingOptIn = body.marketingOptIn === true;

  if (!name || !email || !company) {
    return NextResponse.json({ error: "Name, email, and company are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "That email address doesn't look right." }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const fromAddress = process.env.RESEND_FROM_EMAIL || "Odigo SMB Website <onboarding@resend.dev>";

  try {
    await resend.emails.send({
      from: fromAddress,
      to: TO_ADDRESS,
      replyTo: email,
      subject: `New contact inquiry — ${name}${company ? ` (${company})` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        trade ? `Trade / industry: ${trade}` : null,
        source ? `How they heard about us: ${source}` : null,
        `Marketing email opt-in: ${marketingOptIn ? "Yes" : "No"}`,
        "",
        "What's on their mind:",
        notes || "(nothing entered)",
      ]
        .filter(Boolean)
        .join("\n"),
    });
  } catch (err) {
    console.error("Resend send failed", err);
    return NextResponse.json({ error: "Couldn't send that — please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
