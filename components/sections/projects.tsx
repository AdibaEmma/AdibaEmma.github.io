"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, TrendingUp, Star } from "lucide-react"
import { projects } from "@/lib/constants"

export function ProjectsSection() {
  const [filter, setFilter] = useState("all")
  const categories = ["all", "fullstack", "backend", "blockchain", "desktop", "ml-ai"]

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter
  )

  return (
    <section id="projects" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium font-mono transition-all border ${
                  filter === category
                    ? "bg-primary/10 text-primary border-primary/30"
                    : "bg-background/50 hover:bg-background/80 border-border/50 hover:border-border"
                }`}
              >
                <span className="text-muted-foreground/70">[</span>
                {category.charAt(0).toUpperCase() + category.slice(1).replace("-", "/")}
                <span className="text-muted-foreground/70">]</span>
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
              >
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500/90 text-yellow-900 text-xs font-medium rounded-full">
                      <Star className="h-3 w-3 fill-current" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Overlay with project links - appears on hover */}
                <div className="absolute inset-0 bg-background/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 z-20">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </Link>
                  )}
                  {(project as any).liveUrl && (
                    <Link
                      href={(project as any).liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Link>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                      <div className="text-xs text-muted-foreground px-2 py-1 bg-muted/50 rounded-full capitalize">
                        {project.category}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {project.description}
                    </p>
                    {(project as any).impact && (
                      <div className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400 mb-3">
                        <TrendingUp className="h-3 w-3" />
                        {(project as any).impact}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}