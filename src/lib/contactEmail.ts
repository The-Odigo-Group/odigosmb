const SITE_URL = "https://smb.theodigogroup.com";

const SOURCE_LABELS: Record<string, string> = {
  referral: "Referral",
  search: "Search",
  social: "Social",
  event: "Event / conference",
  other: "Other",
};

export type ContactSubmission = {
  name: string;
  email: string;
  company: string;
  trade: string;
  source: string;
  notes: string;
  marketingOptIn: boolean;
};

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const FONT = "'Plus Jakarta Sans','Outfit',-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif";

function detailRow(label: string, valueHtml: string, last = false) {
  return `
    <tr>
      <td style="padding:14px 0;${last ? "" : "border-bottom:1px solid #395068;"}" valign="top">
        <div style="font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:0.09em;text-transform:uppercase;color:#afb7c2;margin-bottom:4px;">${label}</div>
        <div style="font-family:${FONT};font-size:16px;line-height:1.45;color:#f3f4f7;">${valueHtml}</div>
      </td>
    </tr>`;
}

export function renderContactEmail(d: ContactSubmission): { subject: string; html: string; text: string } {
  const sourceLabel = d.source ? SOURCE_LABELS[d.source] || d.source : "";
  const firstName = d.name.split(/\s+/)[0] || d.name;
  const subject = `New contact inquiry — ${d.name} (${d.company})`;
  const replyHref = `mailto:${esc(d.email)}?subject=${encodeURIComponent("Re: your Odigo SMB inquiry")}`;

  const rows = [
    detailRow("Email", `<a href="mailto:${esc(d.email)}" style="color:#43b870;text-decoration:none;">${esc(d.email)}</a>`),
    detailRow("Company", esc(d.company), !d.trade && !sourceLabel),
    d.trade ? detailRow("Trade or industry", esc(d.trade), !sourceLabel) : "",
    sourceLabel ? detailRow("How they heard about us", esc(sourceLabel), true) : "",
  ].join("");

  const messageHtml = d.notes
    ? esc(d.notes).replace(/\r?\n/g, "<br>")
    : `<span style="color:#afb7c2;">Nothing entered.</span>`;

  const optChip = d.marketingOptIn
    ? `<span style="display:inline-block;padding:6px 14px;border-radius:999px;background:#1d3652;border:1px solid #43b870;color:#43b870;font-family:${FONT};font-size:12px;font-weight:700;">Opted in to marketing emails</span>`
    : `<span style="display:inline-block;padding:6px 14px;border-radius:999px;background:#1d3652;border:1px solid #395068;color:#afb7c2;font-family:${FONT};font-size:12px;font-weight:700;">Not opted in to marketing emails</span>`;

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
  <title>${esc(subject)}</title>
</head>
<body style="margin:0;padding:0;background:#112c49;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${esc(d.name)} from ${esc(d.company)} asked to talk it through.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#112c49" style="background:#112c49;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;">

          <tr>
            <td style="padding:0 8px 20px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" valign="middle">
                    <img src="${SITE_URL}/odigologo.png" alt="Odigo Small Business" width="116" style="display:block;height:auto;border:0;font-family:${FONT};font-size:16px;font-weight:700;color:#f3f4f7;">
                  </td>
                  <td align="right" valign="middle" style="font-family:${FONT};font-size:12px;color:#afb7c2;">
                    Website inquiry
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td bgcolor="#112c49" style="background:#112c49;border:1px solid #395068;border-radius:28px;overflow:hidden;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td height="5" bgcolor="#43b870" style="height:5px;line-height:5px;font-size:0;background:linear-gradient(90deg,#43b870,#a876ce,#7e599b,#112c49);border-radius:28px 28px 0 0;">&nbsp;</td>
                </tr>
                <tr>
                  <td style="padding:36px 36px 8px 36px;">
                    <span style="display:inline-block;padding:6px 14px;border-radius:999px;background:#43b870;border:1px solid #43b870;color:#112c49;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:0.04em;">New inquiry</span>
                    <h1 style="margin:18px 0 6px 0;font-family:${FONT};font-size:30px;line-height:1.15;font-weight:700;color:#f3f4f7;">${esc(d.name)}</h1>
                    <p style="margin:0;font-family:${FONT};font-size:16px;line-height:1.5;color:#afb7c2;">${esc(d.company)}${d.trade ? ` &middot; ${esc(d.trade)}` : ""}</p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:20px 36px 8px 36px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#1d3652" style="background:#1d3652;border:1px solid #395068;border-radius:20px;">
                      <tr><td style="padding:6px 24px;">
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${rows}</table>
                      </td></tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding:16px 36px 8px 36px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#1d3652" style="background:#1d3652;border:1px solid #395068;border-radius:20px;">
                      <tr><td style="padding:22px 24px;">
                        <div style="font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:0.09em;text-transform:uppercase;color:#afb7c2;margin-bottom:10px;">What's on their mind</div>
                        <div style="font-family:${FONT};font-size:16px;line-height:1.65;color:#f3f4f7;">${messageHtml}</div>
                      </td></tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding:20px 36px 4px 36px;">${optChip}</td>
                </tr>

                <tr>
                  <td align="left" style="padding:24px 36px 40px 36px;">
                    <a href="${replyHref}" style="display:inline-block;padding:15px 32px;border-radius:999px;background:#43b870;color:#112c49;font-family:${FONT};font-size:15px;font-weight:700;text-decoration:none;">Reply to ${esc(firstName)}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding:22px 16px 0 16px;font-family:${FONT};font-size:12px;line-height:1.6;color:#afb7c2;">
              Sent from the contact form at <a href="${SITE_URL}/contact" style="color:#43b870;text-decoration:underline;">smb.theodigogroup.com</a>.<br>
              Hit reply and your response goes straight to ${esc(firstName)}.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = [
    `Name: ${d.name}`,
    `Email: ${d.email}`,
    `Company: ${d.company}`,
    d.trade ? `Trade / industry: ${d.trade}` : null,
    sourceLabel ? `How they heard about us: ${sourceLabel}` : null,
    `Marketing email opt-in: ${d.marketingOptIn ? "Yes" : "No"}`,
    "",
    "What's on their mind:",
    d.notes || "(nothing entered)",
  ]
    .filter((line) => line !== null)
    .join("\n");

  return { subject, html, text };
}
