import { Navbar } from "@/components/layout/navbar";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Emmanuel Adiba — fullstack engineer building resilient systems with care.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-12 md:pt-16">
        <AboutSection />
        <ExperienceSection />
      </main>
      <Footer />
    </>
  );
}
