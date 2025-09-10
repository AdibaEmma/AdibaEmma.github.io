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
    { icon: Briefcase, label: "Years Experience", value: "4+", color: "text-blue-500" },
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

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Clean Modern Image Section */}
            <motion.div 
              className="relative"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Subtle Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-3xl blur-xl opacity-50" />
              
              {/* Main Image Container */}
              <div className="relative w-full aspect-[4/5] max-w-sm mx-auto group">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-purple-500/5 border border-border/50 shadow-xl">
                  <Image
                    src="/images/profile.jpg"
                    alt="Emmanuel Adiba"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              </div>
              
              {/* Clean Status Badge */}
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-background/95 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-muted-foreground">Available for opportunities</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Text Section */}
            <div className="text-center lg:text-left space-y-8">
              {/* Hero Text with Enhanced Typography */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                {/* Greeting Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="animate-pulse">👋</span>
                  Hello there!
                </motion.div>

                {/* Main Headline */}
                <div className="space-y-3">
                  <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                    {aboutContent.intro.replace('I\'m Emmanuel, a passionate fullstack engineer', 'I\'m Emmanuel, a passionate')}{" "}
                    <motion.span 
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold">
                        fullstack engineer
                      </span>
                      {/* Animated underline */}
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                      />
                    </motion.span>
                  </h3>
                  
                  <motion.h4 
                    className="text-xl lg:text-2xl font-semibold text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <span className="gradient-text">building the future</span> with code & psychology
                  </motion.h4>
                </div>

                {/* Enhanced Description */}
                <motion.div
                  className="space-y-4 max-w-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {aboutContent.description.split('.')[0]}.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {aboutContent.description.split('.').slice(1).join('.')}
                  </p>
                </motion.div>
              </motion.div>

              {/* Enhanced Location & Status */}
              <motion.div
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-background/50 backdrop-blur-sm border border-border/50 rounded-full">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{siteConfig.location}</span>
                </div>
                
                <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-green-600">Open to opportunities</span>
                </div>
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                {/* Primary CTA */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={aboutContent.resumePath}
                    download
                    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground rounded-xl font-semibold overflow-hidden transition-all hover:shadow-xl hover:shadow-primary/30"
                  >
                    <Download className="h-5 w-5 group-hover:animate-bounce transition-transform duration-300" />
                    Download Resume
                    
                    {/* Button shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  </Link>
                </motion.div>

                {/* Secondary CTA */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/projects"
                    className="group relative inline-flex items-center gap-2 px-8 py-4 border-2 border-border/50 hover:border-primary/50 rounded-xl font-semibold bg-background/30 hover:bg-background/60 backdrop-blur-sm transition-all overflow-hidden"
                  >
                    <Code className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    View Projects
                    
                    {/* Animated border */}
                    <motion.div
                      className="absolute inset-0 border-2 border-primary/30 rounded-xl opacity-0"
                      whileHover={{ opacity: 1, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Skills Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-12"
              >
                <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Technical Skills</h3>
                
                {/* Compact Grid Layout */}
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Frontend", data: skills.frontend, color: "from-blue-500 to-cyan-500", icon: "💻" },
                    { title: "Backend", data: skills.backend, color: "from-green-500 to-emerald-500", icon: "⚡" },
                    { title: "Database", data: skills.database, color: "from-orange-500 to-red-500", icon: "🗄️" },
                    { title: "Tools & DevOps", data: skills.tools, color: "from-purple-500 to-pink-500", icon: "🛠️" },
                    { title: "ML/AI", data: skills.mlai, color: "from-yellow-500 to-orange-500", icon: "🧠" },
                  ].map((category, categoryIndex) => (
                    <motion.div
                      key={category.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + categoryIndex * 0.1 }}
                      className="bg-background/60 backdrop-blur-sm rounded-xl p-5 border border-border/50 hover:bg-background/80 hover:border-primary/30 transition-all duration-300 hover:shadow-lg h-fit"
                    >
                      {/* Compact Category Header */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white text-sm shadow-lg`}>
                          {category.icon}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-foreground">{category.title}</h4>
                          <p className="text-xs text-muted-foreground">{category.data.length} techs</p>
                        </div>
                      </div>

                      {/* Compact Skills Grid */}
                      <div className="grid grid-cols-4 gap-3">
                        {category.data.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: 1.0 + categoryIndex * 0.1 + index * 0.03,
                            }}
                            whileHover={{ scale: 1.05, y: -1 }}
                            className="group relative flex flex-col items-center gap-1 p-3 rounded-lg bg-background/50 hover:bg-background/90 border border-border/30 hover:border-primary/40 transition-all duration-300 cursor-pointer"
                          >
                            {/* Skill Icon */}
                            <i className={`${skill.icon} text-lg group-hover:scale-110 transition-transform duration-300`} />

                            {/* Skill Name */}
                            <span className="text-xs font-medium text-center leading-tight text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                              {skill.name}
                            </span>

                            {/* Hover border effect */}
                            <div className="absolute inset-0 rounded-lg border border-primary/0 group-hover:border-primary/30 transition-all duration-300" />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Compact Skills Summary */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20 text-center"
                >
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-primary">{Object.values(skills).flat().length}+ technologies</span> across frontend, backend, databases, and ML/AI
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
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
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
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