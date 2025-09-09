"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Download, Calendar, MapPin, GraduationCap } from "lucide-react"
import { aboutContent, siteConfig } from "@/lib/constants"

export function AboutSection() {
  const timeline = [
    {
      year: "2018 - 2022",
      title: "Computer Engineering",
      description: "University of Energy and Natural Resources",
      icon: GraduationCap,
    },
    {
      year: "2022 - Present",
      title: "Fullstack Developer",
      description: "Building web applications and exploring ML/AI",
      icon: Calendar,
    },
  ]

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="/images/profile.jpg"
                alt="Emmanuel Adiba"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">
                {aboutContent.intro}{" "}
                <span className="gradient-text">passionate about code</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {aboutContent.description}
              </p>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>{siteConfig.location}</span>
            </div>

            <Link
              href={aboutContent.resumePath}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Download className="h-5 w-5" />
              Download CV
            </Link>

            <div className="space-y-4 pt-6">
              <h4 className="text-lg font-semibold">Journey</h4>
              {timeline.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h5 className="font-semibold">{item.title}</h5>
                        <span className="text-sm text-muted-foreground">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}