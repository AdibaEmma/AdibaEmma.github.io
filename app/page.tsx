import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { AboutPreview } from "@/components/sections/about-preview";
import { WorkSection } from "@/components/sections/work";
import { ExperienceSection } from "@/components/sections/experience";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <HeroSection />
        <MarqueeStrip />
        <AboutPreview />
        <WorkSection />
        <ExperienceSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
