"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Download, MapPin, GraduationCap, Briefcase, Award, Code, TrendingUp, Users, Clock } from "lucide-react"
import { aboutContent, workExperience, education, siteConfig, skills } from "@/lib/constants"

export function AboutSection() {
  const allExperience = [...workExperience, { 
    id: "education", 
    company: education.institution,
    position: education.degree,
    location: education.location,
    period: education.period,
    type: "Education",
    achievements: education.achievements,
    technologies: ["Computer Engineering", "Software Development", "System Design"]
  }].reverse()

  const stats = [
    { icon: Briefcase, label: "Years Experience", value: "3+", color: "text-blue-500" },
    { icon: Code, label: "Projects Delivered", value: "15+", color: "text-green-500" },
    { icon: TrendingUp, label: "Performance Boost", value: "40%", color: "text-purple-500" },
    { icon: Users, label: "Users Impacted", value: "15K+", color: "text-orange-500" },
  ]

  return (
    <section id="about" className="section-padding-sm bg-muted/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>
      
      <div className="container-width relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="section-header"
        >
          <h2 className="section-title gradient-text">About Me</h2>
          <p className="section-subtitle">
            My journey as a software engineer and technology enthusiast
          </p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto mt-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all cursor-pointer"
              >
                <Icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-lg opacity-50"
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative w-full aspect-[4/5] max-w-sm mx-auto group">
                <Image
                  src="/images/profile.jpg"
                  alt="Emmanuel Adiba"
                  fill
                  className="object-cover object-top rounded-2xl shadow-2xl group-hover:shadow-primary/20 transition-shadow duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl group-hover:from-primary/20 transition-colors duration-300" />
              </div>
            </motion.div>

            <div className="text-center lg:text-left space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {aboutContent.intro}{" "}
                  <span className="gradient-text">building the future</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {aboutContent.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground justify-center lg:justify-start">
                <MapPin className="h-5 w-5 text-primary" />
                <span>{siteConfig.location}</span>
              </div>

              <div className="flex gap-4 justify-center lg:justify-start">
                <Link
                  href={aboutContent.resumePath}
                  download
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
                >
                  <Download className="h-5 w-5 group-hover:animate-bounce" />
                  Download CV
                </Link>
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all hover:scale-105"
                >
                  View Projects
                </Link>
              </div>

              {/* Skills Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-12"
              >
                <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">My Skills</h3>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Frontend", data: skills.frontend, color: "from-blue-500 to-cyan-500" },
                    { title: "Backend", data: skills.backend, color: "from-green-500 to-emerald-500" },
                    { title: "Database", data: skills.database, color: "from-orange-500 to-red-500" },
                    { title: "Tools & DevOps", data: skills.tools, color: "from-purple-500 to-pink-500" },
                    { title: "ML/AI", data: skills.mlai, color: "from-yellow-500 to-orange-500" },
                  ].map((category, categoryIndex) => (
                    <motion.div
                      key={category.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.1 }}
                      className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:bg-card/80 transition-all duration-300"
                    >
                      <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span
                          className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} animate-pulse`}
                        />
                        {category.title}
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {category.data.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: 0.4 + categoryIndex * 0.1 + index * 0.05,
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
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-bold mb-2">Professional Journey</h3>
              <p className="text-muted-foreground">My path in software engineering</p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-pink-500 opacity-30" />
              
              <div className="space-y-8">
                {allExperience.map((experience, index) => {
                  const isEducation = experience.type === "Education"
                  const Icon = isEducation ? GraduationCap : Briefcase
                  
                  return (
                    <motion.div
                      key={experience.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative flex gap-6 group"
                    >
                      {/* Timeline dot */}
                      <div className="flex-shrink-0 relative">
                        <div className="w-12 h-12 rounded-full bg-background border-2 border-primary/30 group-hover:border-primary transition-all flex items-center justify-center shadow-lg">
                          <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                        </div>
                        {index < allExperience.length - 1 && (
                          <div className="absolute top-12 left-1/2 w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent" />
                        )}
                      </div>

                      {/* Experience card */}
                      <motion.div 
                        className="flex-1 bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 group-hover:border-primary/30 transition-all hover:shadow-lg cursor-pointer"
                        whileHover={{ x: 5, backgroundColor: "rgba(var(--background), 0.8)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-lg font-semibold text-primary">{experience.position}</h4>
                            <p className="text-foreground font-medium">{experience.company}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {experience.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {experience.period}
                              </span>
                            </div>
                          </div>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            isEducation 
                              ? 'bg-blue-500/10 text-blue-500' 
                              : experience.type === 'Remote' 
                                ? 'bg-green-500/10 text-green-500'
                                : experience.type === 'Contract'
                                  ? 'bg-orange-500/10 text-orange-500'
                                  : 'bg-primary/10 text-primary'
                          }`}>
                            {experience.type}
                          </span>
                        </div>

                        <ul className="space-y-2 mb-4">
                          {experience.achievements.slice(0, 2).map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <Award className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {experience.technologies.length > 4 && (
                            <span className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
                              +{experience.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}