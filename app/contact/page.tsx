import { Navbar } from "@/components/layout/navbar"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/layout/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - Emmanuel Adiba",
  description: "Get in touch with Emmanuel Adiba for collaborations, projects, or opportunities in fullstack development",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}