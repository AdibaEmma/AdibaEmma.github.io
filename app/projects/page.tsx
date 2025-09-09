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
        <div className="py-16">
          <div className="container-width">
            <div className="text-center mb-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground">
                My Projects
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-6" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A showcase of my technical expertise and innovative solutions
              </p>
            </div>
          </div>
        </div>
        <ProjectsSection />
      </main>
      <Footer />
    </>
  )
}