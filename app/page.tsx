import { Navbar } from "@/components/layout/navbar"
import { HeroSection } from "@/components/sections/hero"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </>
  )
}