"use client"

import { motion } from "framer-motion"
import { skills } from "@/lib/constants"

export function SkillsSection() {
  const skillCategories = [
    { title: "Frontend", data: skills.frontend, color: "from-blue-500 to-cyan-500" },
    { title: "Backend", data: skills.backend, color: "from-green-500 to-emerald-500" },
    { title: "Database", data: skills.database, color: "from-orange-500 to-red-500" },
    { title: "Tools & DevOps", data: skills.tools, color: "from-purple-500 to-pink-500" },
    { title: "ML/AI", data: skills.mlai, color: "from-yellow-500 to-orange-500" },
  ]

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:bg-card/80 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} animate-pulse`}
                />
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.data.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + index * 0.05,
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-200"
                  >
                    <i className={`${skill.icon} text-3xl hover:scale-110 transition-transform`} />
                    <span className="text-xs font-medium text-center leading-tight">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}