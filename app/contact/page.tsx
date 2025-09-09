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
        <div className="py-16">
          <div className="container-width">
            <div className="text-center mb-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground">
                Get In Touch
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-6" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Let's collaborate on something amazing
              </p>
            </div>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}