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
        <div className="py-16">
          <div className="container-width">
            <div className="text-center mb-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground">
                ML/AI Projects
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-6" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Exploring the frontiers of Machine Learning and Artificial Intelligence
              </p>
            </div>
          </div>
        </div>
        
        <section className="section-padding">
          <div className="container-width">
            <div className="text-center py-16">
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  I'm currently working on exciting ML/AI projects that will be showcased here soon. 
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