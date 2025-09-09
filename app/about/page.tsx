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
        <AboutSection />
      </main>
      <Footer />
    </>
  )
}