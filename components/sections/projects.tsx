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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="section-header"
        >
          <h2 className="section-title gradient-text">My Projects</h2>
          <p className="section-subtitle">
            A showcase of my technical expertise and innovative solutions
          </p>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto mt-6 mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-medium font-mono transition-all border overflow-hidden group ${
                  filter === category
                    ? "bg-primary/15 text-primary border-primary/40 shadow-lg shadow-primary/20"
                    : "bg-background/50 backdrop-blur-sm border-border/50 hover:bg-background/80 hover:border-primary/30"
                }`}
              >
                <span className="relative z-10 flex items-center gap-1">
                  <span className="text-muted-foreground/70">[</span>
                  {category.charAt(0).toUpperCase() + category.slice(1).replace("-", "/")}
                  <span className="text-muted-foreground/70">]</span>
                </span>
                
                {/* Active indicator */}
                {filter === category && (
                  <motion.div
                    className="absolute inset-0 bg-primary/10 rounded-xl"
                    layoutId="activeFilter"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                
                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -40 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ y: -8 }}
                className="group relative bg-background/50 backdrop-blur-sm border-2 border-border/50 hover:bg-background/80 hover:border-primary/30 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
              >
                {/* Background gradient glow */}
                <div className="absolute -inset-px bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                
                {/* Project Image */}
                <div className="relative h-52 w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                  
                  {/* Floating particles on hover */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/60 rounded-full"
                        initial={{ 
                          x: Math.random() * 100 + '%',
                          y: '100%',
                          opacity: 0
                        }}
                        whileHover={{
                          y: '-20%',
                          opacity: [0, 1, 0],
                          x: Math.random() * 100 + '%',
                        }}
                        transition={{
                          duration: 2 + Math.random(),
                          delay: i * 0.2,
                          repeat: Infinity,
                          repeatType: "loop"
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <motion.div 
                    className="absolute top-4 right-4 z-20"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.05 + 0.2, type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-yellow-900 text-xs font-bold rounded-full shadow-lg">
                      <Star className="h-3 w-3 fill-current" />
                      Featured
                    </div>
                  </motion.div>
                )}

                {/* Overlay with project links */}
                <motion.div 
                  className="absolute inset-0 bg-background/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 z-30"
                  initial={false}
                >
                  {project.githubUrl && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileHover={{ scale: 1.1 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all font-medium"
                      >
                        <Github className="h-4 w-4" />
                        View Code
                      </Link>
                    </motion.div>
                  )}
                  {'liveUrl' in project && (project as typeof project & { liveUrl: string }).liveUrl && (
                    <motion.div
                      initial={{ scale: 0, rotate: 180 }}
                      whileHover={{ scale: 1.1 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Link
                        href={(project as typeof project & { liveUrl: string }).liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 hover:shadow-lg transition-all font-medium"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Link>
                    </motion.div>
                  )}
                </motion.div>

                {/* Project Content */}
                <div className="relative p-6 space-y-4">
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <motion.h3 
                        className="text-xl font-bold group-hover:text-primary transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.div 
                        className="text-xs text-muted-foreground px-3 py-1 bg-muted/60 rounded-full capitalize font-medium border border-border/50"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--primary), 0.1)" }}
                      >
                        {project.category}
                      </motion.div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    {'impact' in project && (project as typeof project & { impact: string }).impact && (
                      <motion.div 
                        className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400 mb-4 p-2 bg-green-500/5 rounded-lg border border-green-500/20"
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                      >
                        <TrendingUp className="h-3 w-3" />
                        {(project as typeof project & { impact: string }).impact}
                      </motion.div>
                    )}
                  </div>

                  {/* Technology Tags */}
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={{
                      hover: {
                        transition: {
                          staggerChildren: 0.05,
                        },
                      },
                    }}
                    whileHover="hover"
                  >
                    {project.technologies.slice(0, 4).map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-all cursor-default border border-primary/20"
                        variants={{
                          hover: {
                            scale: 1.1,
                            y: -2,
                          },
                        }}
                        whileHover={{ 
                          backgroundColor: "rgba(var(--primary), 0.2)",
                          borderColor: "rgba(var(--primary), 0.4)"
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 4 && (
                      <motion.span 
                        className="px-3 py-1.5 text-xs font-medium bg-muted text-muted-foreground rounded-full cursor-default border border-border/50"
                        whileHover={{ scale: 1.05 }}
                      >
                        +{project.technologies.length - 4}
                      </motion.span>
                    )}
                  </motion.div>
                  
                  {/* Bottom shine effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}