import { Navbar } from "@/components/layout/navbar"
import { AboutSection } from "@/components/sections/about"
import { Footer } from "@/components/layout/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - Emmanuel Adiba",
  description: "Learn more about Emmanuel Adiba, a fullstack engineer with expertise in web development and passion for ML/AI",
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="py-16">
          <div className="container-width">
            <div className="text-center mb-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground">
                About Me
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-6" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                My journey as a software engineer and technology enthusiast
              </p>
            </div>
          </div>
        </div>
        <AboutSection />
      </main>
      <Footer />
    </>
  )
}