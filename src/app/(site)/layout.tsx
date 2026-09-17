import { AmbientGlow } from "@/components/site/AmbientGlow";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <AmbientGlow />
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
