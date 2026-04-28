import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { AboutPreview } from "@/components/sections/about-preview";
import { WorkSection } from "@/components/sections/work";
import { PillarLog } from "@/components/sections/pillar-log";
import { ExperienceSection } from "@/components/sections/experience";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/layout/footer";
import { fetchEngineerEntry } from "@/lib/github";

export default async function Home() {
  // Fetch once at the page boundary so both the hero overlay (interactive
  // tetrahedron) and the Pillar Log section share the same ISR-cached entry.
  const engineer = await fetchEngineerEntry();

  return (
    <>
      <Navbar />
      <main className="relative">
        <HeroSection engineerEntry={engineer} />
        <MarqueeStrip />
        <AboutPreview />
        <WorkSection />
        <PillarLog engineer={engineer} />
        <ExperienceSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
