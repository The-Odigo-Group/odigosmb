import type { Metadata } from "next";
import { ProgramPage } from "@/components/site/ProgramPage";

export const metadata: Metadata = {
  title: "Win Customers — Google Ads Program | Odigo SMB",
  description:
    "Google Search and Local Services Ads run against your budget for a flat monthly fee. Media is billed to you and never marked up. $1,950 a month with a six-month minimum.",
};

export default function WinCustomersPage() {
  return (
    <ProgramPage
      name="Win Customers"
      lede="Google Search and Local Services Ads, run against your budget for a flat monthly fee. Your media is billed to you directly and never marked up."
      includedLead="Tracking is verified before a dollar of ad spend goes out."
      included={[
        "Google Search campaigns built, managed and optimized",
        "Local Services Ads set up and managed",
        "Conversion tracking verified before launch",
        "Managed ad spend up to $5,000 a month on the base fee",
        "Monthly results, reviewed with your fCMO",
      ]}
      facts={[
        { num: "$1,950", unit: "/mo", label: "Flat fee, no percentage of spend. With Foundation: $2,949/mo" },
        { num: "6 months", label: "Minimum, then six-month terms" },
        { num: "+$500", unit: "/mo", label: "For managed spend of $5,000 to $10,000 a month" },
      ]}
      note="Paid ads show signal within weeks and settle around 90 days. Additional locations are $550 a month each and the $5,000 to $10,000 spend tier is chosen at signing; spend above $10,000 a month is quoted separately. Meta advertising is coming later."
    />
  );
}
