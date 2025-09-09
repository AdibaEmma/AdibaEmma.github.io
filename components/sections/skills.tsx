"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { skills } from "@/lib/constants"
import { Zap, Code, Database, Wrench, Brain } from "lucide-react"

export function SkillsSection() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories = [
    { 
      title: "Frontend", 
      data: skills.frontend, 
      color: "from-blue-500 to-cyan-500",
      icon: Code,
      description: "Creating beautiful and responsive user interfaces"
    },
    { 
      title: "Backend", 
      data: skills.backend, 
      color: "from-green-500 to-emerald-500",
      icon: Zap,
      description: "Building robust server-side applications"
    },
    { 
      title: "Database", 
      data: skills.database, 
      color: "from-orange-500 to-red-500",
      icon: Database,
      description: "Managing and optimizing data storage solutions"
    },
    { 
      title: "Tools & DevOps", 
      data: skills.tools, 
      color: "from-purple-500 to-pink-500",
      icon: Wrench,
      description: "Streamlining development workflows"
    },
    { 
      title: "ML/AI", 
      data: skills.mlai, 
      color: "from-yellow-500 to-orange-500",
      icon: Brain,
      description: "Exploring machine learning and artificial intelligence"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  }

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.68, -0.55, 0.265, 1.55] as const,
      },
    },
  }

  return (
    <section id="skills" className="section-padding-sm bg-muted/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-width relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title gradient-text">Technical Skills</h2>
          <p className="section-subtitle">
            A comprehensive toolkit for building modern applications
          </p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
        >
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="group relative"
                onHoverStart={() => setHoveredCategory(categoryIndex)}
                onHoverEnd={() => setHoveredCategory(null)}
              >
                {/* Card Background with Gradient Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"
                     style={{
                       background: `linear-gradient(135deg, ${category.color.replace('from-', '').replace(' to-', ', ')})`,
                     }} />
                
                <div className="relative bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-background/80 hover:border-primary/30 rounded-xl p-6 lg:p-8 h-full group-hover:shadow-xl group-hover:shadow-primary/10 transition-all duration-500">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <motion.div 
                    className="grid grid-cols-3 gap-3"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: categoryIndex * 0.1,
                        },
                      },
                    }}
                  >
                    {category.data.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        className="relative group/skill"
                        onHoverStart={() => setHoveredSkill(skill.name)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-background/60 hover:bg-background/90 border border-border/30 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                          {/* Skill Icon */}
                          <motion.div
                            className="relative"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <i className={`${skill.icon} text-2xl lg:text-3xl transition-all duration-300`} />
                            
                            {/* Glow effect on hover */}
                            <motion.div
                              className="absolute inset-0 bg-primary/20 rounded-full blur-md -z-10"
                              initial={{ scale: 0, opacity: 0 }}
                              whileHover={{ scale: 1.5, opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          </motion.div>

                          {/* Skill Name */}
                          <span className="text-xs lg:text-sm font-medium text-center leading-tight text-foreground group-hover/skill:text-primary transition-colors">
                            {skill.name}
                          </span>

                          {/* Hover shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                            initial={{ x: '-100%', opacity: 0 }}
                            whileHover={{ x: '100%', opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                          />

                          {/* Floating indicator */}
                          {hoveredSkill === skill.name && (
                            <motion.div
                              className="absolute -top-2 -right-2 w-3 h-3 bg-primary rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            />
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Category Stats/Level Indicator */}
                  <motion.div 
                    className="mt-6 pt-4 border-t border-border/30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCategory === categoryIndex ? 1 : 0.7 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground font-medium">
                        {category.data.length} Technologies
                      </span>
                      <motion.div 
                        className="flex gap-1"
                        initial="hidden"
                        animate="visible"
                        variants={{
                          visible: {
                            transition: {
                              staggerChildren: 0.1,
                            },
                          },
                        }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                              i < 4 ? 'bg-primary' : 'bg-border'
                            }`}
                            variants={{
                              hidden: { scale: 0 },
                              visible: { scale: 1 },
                            }}
                            transition={{ delay: i * 0.05 }}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Want to see these skills in action?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg font-medium transition-all border border-primary/20 hover:border-primary/40"
            >
              View My Projects
              <motion.svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </motion.svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}