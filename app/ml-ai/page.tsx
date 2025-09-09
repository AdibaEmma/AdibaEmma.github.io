import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "ML/AI Projects - Emmanuel Adiba",
  description: "Machine Learning and AI projects by Emmanuel Adiba, exploring innovative solutions with modern AI technologies",
}

export default function MLAIPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="section-padding-sm relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          </div>

          <div className="container-width relative z-10">
            {/* Section Header */}
            <div className="section-header">
              <h1 className="section-title gradient-text">ML/AI Projects</h1>
              <p className="section-subtitle">
                Exploring the frontiers of Machine Learning and Artificial Intelligence
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto mt-6" />
            </div>
            
            {/* Coming Soon Content */}
            <div className="text-center py-16">
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 flex items-center justify-center backdrop-blur-sm border border-primary/20 animate-pulse-glow">
                  <svg className="w-12 h-12 text-primary animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4 gradient-text">Coming Soon</h2>
                <p className="text-muted-foreground max-w-lg mx-auto text-lg leading-relaxed">
                  I&apos;m currently working on exciting ML/AI projects that will be showcased here soon. 
                  Stay tuned for innovative solutions in machine learning, data science, and AI applications.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}