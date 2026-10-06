import type { Metadata } from "next";
import { ProgramPage } from "@/components/site/ProgramPage";

export const metadata: Metadata = {
  title: "Earn Followers — Organic Social Program | Odigo SMB",
  description:
    "Organic social on Instagram and Facebook, planned two weeks ahead and posted three times a week, with comments and messages answered for you. $2,450 a month.",
};

export default function EarnFollowersPage() {
  return (
    <ProgramPage
      name="Earn Followers"
      lede="Organic social on Instagram and Facebook, planned two weeks ahead and posted three times a week, with comments and messages answered for you."
      includedLead="Your fCMO sets the content priorities from your Foundations plan. Our team produces, posts and replies."
      included={[
        "Three posts a week on Instagram and Facebook, also shared to your Google Business Profile",
        "A rolling two-week content calendar you can see in your portal",
        "Comments and messages answered within one business day on weekdays, with questions about your hours, stock or availability passed to you",
        "Up to two customer reposts a week on top of your three posts, each with the creator's written permission and credit",
        "Monthly results, reviewed with your fCMO",
      ]}
      need={{
        heading: "What we need from you",
        paragraphs: [
          "Fresh photos and video from your business. Real moments from your team and customers carry social better than anything we could stage.",
          "Your media goes into the next planned post. Same-day posting of something you just shot is best effort.",
        ],
      }}
      facts={[
        { num: "$2,450", unit: "/mo", label: "With Foundation: $3,449/mo" },
        { num: "6 months", label: "Minimum, then six-month terms" },
        { num: "1 business day", label: "Reply time on weekdays" },
      ]}
      note="A busy weekend is covered. If your page consistently needs more than the plan includes, your fCMO proposes a package extension built around it. Reputation-crisis management and physical signage are handled separately."
    />
  );
}
