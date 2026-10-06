import type { Metadata } from "next";
import { ProgramPage } from "@/components/site/ProgramPage";

export const metadata: Metadata = {
  title: "Get Found — Local Search Program | Odigo SMB",
  description:
    "Your Google Business Profile, listings and reviews managed every month, so the people searching nearby find you. $2,550 a month with a six-month minimum.",
};

export default function GetFoundPage() {
  return (
    <ProgramPage
      name="Get Found"
      lede="Your Google Business Profile, listings and reviews managed every month, so the people searching nearby find you with accurate details and a strong rating."
      includedLead="Your fCMO sets the local search priorities. Our team handles the work and reports the results to you each month."
      included={[
        "Google Business Profile optimization and upkeep",
        "Business listings kept accurate across directories, data aggregators and voice assistants, with new citations built over time",
        "Review requests and responses, with every response to a 1 to 3 star review approved by a person before it posts",
        "Your ranking tracked on Google Maps and in search results for the keywords that matter to you",
        "Your key website pages optimized for local search in the first 90 days, then kept current",
        "Two new service-area or content pages a month",
        "Four Google Business Profile posts a month",
        "Local search priorities set and reviewed by your fCMO",
      ]}
      facts={[
        { num: "$2,550", unit: "/mo", label: "With Foundation: $3,549/mo" },
        { num: "6 months", label: "Minimum, then six-month terms" },
        { num: "+$650", unit: "/mo", label: "Each additional location, chosen at signing" },
      ]}
      note="Local search builds over 6 to 12 months, which is why the minimum is six. Additional locations are chosen when you sign. If you consistently need more than your plan covers, your fCMO proposes a package extension built around it."
    />
  );
}
