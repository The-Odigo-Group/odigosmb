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
      <td style="padding:14px 0;${last ? "" : "border-bottom:1px solid #243044;"}" valign="top">
        <div style="font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:0.09em;text-transform:uppercase;color:#7f949c;margin-bottom:4px;">${label}</div>
        <div style="font-family:${FONT};font-size:16px;line-height:1.45;color:#eaf1ef;">${valueHtml}</div>
      </td>
    </tr>`;
}

export function renderContactEmail(d: ContactSubmission): { subject: string; html: string; text: string } {
  const sourceLabel = d.source ? SOURCE_LABELS[d.source] || d.source : "";
  const firstName = d.name.split(/\s+/)[0] || d.name;
  const subject = `New contact inquiry — ${d.name} (${d.company})`;
  const replyHref = `mailto:${esc(d.email)}?subject=${encodeURIComponent("Re: your Odigo SMB inquiry")}`;

  const rows = [
    detailRow("Email", `<a href="mailto:${esc(d.email)}" style="color:#45b6ab;text-decoration:none;">${esc(d.email)}</a>`),
    detailRow("Company", esc(d.company), !d.trade && !sourceLabel),
    d.trade ? detailRow("Trade or industry", esc(d.trade), !sourceLabel) : "",
    sourceLabel ? detailRow("How they heard about us", esc(sourceLabel), true) : "",
  ].join("");

  const messageHtml = d.notes
    ? esc(d.notes).replace(/\r?\n/g, "<br>")
    : `<span style="color:#7f949c;">Nothing entered.</span>`;

  const optChip = d.marketingOptIn
    ? `<span style="display:inline-block;padding:6px 14px;border-radius:999px;background:#1d2e1f;border:1px solid #3d5a35;color:#9ccd6b;font-family:${FONT};font-size:12px;font-weight:700;">Opted in to marketing emails</span>`
    : `<span style="display:inline-block;padding:6px 14px;border-radius:999px;background:#18222f;border:1px solid #2b3849;color:#9fb3ba;font-family:${FONT};font-size:12px;font-weight:700;">Not opted in to marketing emails</span>`;

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
  <title>${esc(subject)}</title>
</head>
<body style="margin:0;padding:0;background:#0a0f17;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${esc(d.name)} from ${esc(d.company)} asked to talk it through.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#0a0f17" style="background:#0a0f17;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;">

          <tr>
            <td style="padding:0 8px 20px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" valign="middle">
                    <img src="${SITE_URL}/odigologo.png" alt="Odigo Small Business" width="116" style="display:block;height:auto;border:0;font-family:${FONT};font-size:16px;font-weight:700;color:#eaf1ef;">
                  </td>
                  <td align="right" valign="middle" style="font-family:${FONT};font-size:12px;color:#7f949c;">
                    Website inquiry
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td bgcolor="#0f1621" style="background:#0f1621;border:1px solid #243044;border-radius:28px;overflow:hidden;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td height="5" bgcolor="#45b6ab" style="height:5px;line-height:5px;font-size:0;background:linear-gradient(90deg,#5b3a8c,#45b6ab,#7ea852);border-radius:28px 28px 0 0;">&nbsp;</td>
                </tr>
                <tr>
                  <td style="padding:36px 36px 8px 36px;">
                    <span style="display:inline-block;padding:6px 14px;border-radius:999px;background:#15322f;border:1px solid #28625c;color:#45b6ab;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:0.04em;">New inquiry</span>
                    <h1 style="margin:18px 0 6px 0;font-family:${FONT};font-size:30px;line-height:1.15;font-weight:700;color:#eaf1ef;">${esc(d.name)}</h1>
                    <p style="margin:0;font-family:${FONT};font-size:16px;line-height:1.5;color:#9fb3ba;">${esc(d.company)}${d.trade ? ` &middot; ${esc(d.trade)}` : ""}</p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:20px 36px 8px 36px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#131c2a" style="background:#131c2a;border:1px solid #243044;border-radius:20px;">
                      <tr><td style="padding:6px 24px;">
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${rows}</table>
                      </td></tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding:16px 36px 8px 36px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#131c2a" style="background:#131c2a;border:1px solid #243044;border-radius:20px;">
                      <tr><td style="padding:22px 24px;">
                        <div style="font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:0.09em;text-transform:uppercase;color:#7f949c;margin-bottom:10px;">What's on their mind</div>
                        <div style="font-family:${FONT};font-size:16px;line-height:1.65;color:#dbe4e2;">${messageHtml}</div>
                      </td></tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding:20px 36px 4px 36px;">${optChip}</td>
                </tr>

                <tr>
                  <td align="left" style="padding:24px 36px 40px 36px;">
                    <a href="${replyHref}" style="display:inline-block;padding:15px 32px;border-radius:999px;background:#45b6ab;color:#0a1512;font-family:${FONT};font-size:15px;font-weight:700;text-decoration:none;">Reply to ${esc(firstName)}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding:22px 16px 0 16px;font-family:${FONT};font-size:12px;line-height:1.6;color:#6c8088;">
              Sent from the contact form at <a href="${SITE_URL}/contact" style="color:#8aa0a8;text-decoration:underline;">smb.theodigogroup.com</a>.<br>
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
