import { Navbar } from "@/components/layout/navbar";
import { ProjectsSection } from "@/components/sections/projects";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work by Emmanuel Adiba — fintech, trading systems, HR platforms, and microservices.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-12 md:pt-16">
        <ProjectsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
