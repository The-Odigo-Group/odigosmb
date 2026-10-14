import { renderContactEmail } from "@/lib/contactEmail";

const SAMPLE = {
  name: "Jane Smith",
  email: "jane@smithhvac.com",
  company: "Smith HVAC",
  trade: "HVAC",
  source: "search",
  notes: "We're doing about $3M and want help with local ads.\nWe've never had anyone own the marketing, it's me at 9pm.",
  marketingOptIn: true,
};

export function GET(request: Request) {
  if (process.env.NODE_ENV === "production") {
    return new Response("Not found", { status: 404 });
  }
  const minimal = new URL(request.url).searchParams.has("minimal");
  const { html } = renderContactEmail(
    minimal ? { ...SAMPLE, name: "Sam", trade: "", source: "", notes: "", marketingOptIn: false } : SAMPLE
  );
  return new Response(html.replaceAll("https://smb.theodigogroup.com/odigologo.png", "/odigologo.png"), {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
