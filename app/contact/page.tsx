import { Navbar } from "@/components/layout/navbar";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Emmanuel Adiba for engineering engagements and collaborations.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-12 md:pt-16">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
