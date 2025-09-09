import { Navbar } from "@/components/layout/navbar"
import { ProjectsSection } from "@/components/sections/projects"
import { Footer } from "@/components/layout/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects - Emmanuel Adiba",
  description: "Explore projects built by Emmanuel Adiba, showcasing fullstack development and innovative solutions",
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <ProjectsSection />
      </main>
      <Footer />
    </>
  )
}