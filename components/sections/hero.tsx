"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter, Facebook, Mail, Code2, Terminal, Cpu } from "lucide-react"
import { roles, siteConfig } from "@/lib/constants"
import { MatrixRain } from "@/components/animations/matrix-rain"
import { FloatingElements } from "@/components/animations/floating-elements"

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText !== role) {
          setDisplayText(role.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (displayText === "") {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        } else {
          setDisplayText(displayText.slice(0, -1))
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  const socialLinks = [
    { icon: Github, href: siteConfig.social.github, label: "GitHub" },
    { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
    { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
    { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
  ]

  const floatingIcons = [
    { icon: Code2, delay: 0 },
    { icon: Terminal, delay: 2 },
    { icon: Cpu, delay: 4 },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        {/* Additional floating tech icons for more visual interest */}
        {floatingIcons.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={index}
              className="absolute text-muted-foreground/20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut"
              }}
              style={{
                left: `${20 + index * 20}%`,
                top: `${30 + index * 15}%`,
              }}
            >
              <Icon className="h-8 w-8" />
            </motion.div>
          )
        })}
        
        {/* Enhanced grid pattern with animation */}
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container-width relative z-10"
      >
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -5, 0]
              }}
              transition={{ 
                delay: 0.1,
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="relative"
            >
              <div className="text-sm font-mono text-muted-foreground border border-border/50 rounded-full px-4 py-2 bg-background/50 backdrop-blur-sm hover:border-primary/50 hover:bg-background/70 transition-all duration-300">
                <span className="text-green-500">~/</span> Hello, World! 👋
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              {siteConfig.name}
            </motion.h1>
            
            <div className="text-2xl md:text-3xl lg:text-4xl font-light">
              <span className="text-muted-foreground">const role = </span>
              <span className="gradient-text font-bold font-mono">
                &quot;{displayText}&quot;
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-primary"
                >
                  |
                </motion.span>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-lg blur-lg opacity-50" />
            <p className="relative text-muted-foreground max-w-2xl text-lg bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              {siteConfig.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Enhanced Hire Me Button */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => {}}
              onHoverEnd={() => {}}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground rounded-lg font-medium overflow-hidden transition-all hover:shadow-xl hover:shadow-primary/30 border-2 border-transparent hover:border-primary/20"
              >
                <span className="relative z-20 flex items-center gap-2 font-semibold">
                  Hire Me
                  <motion.svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </motion.svg>
                </span>
                
                {/* Animated background layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg" />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 rounded-lg"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
                
                {/* Pulse effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-lg"
                  initial={{ scale: 1, opacity: 0 }}
                  whileHover={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{ 
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/60 rounded-full"
                      initial={{ 
                        x: Math.random() * 100 + '%',
                        y: '100%',
                        opacity: 0
                      }}
                      whileHover={{
                        y: '-100%',
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatType: "loop"
                      }}
                    />
                  ))}
                </div>
              </Link>
              
              {/* Floating glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-xl -z-10"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Enhanced View Projects Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/projects"
                className="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-border/50 rounded-lg font-medium hover:border-primary/50 transition-all bg-background/30 hover:bg-background/60 backdrop-blur-sm overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2 font-semibold">
                  View Projects
                  <motion.svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className="group-hover:rotate-45 transition-transform duration-300"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2"/>
                    <path d="M9 9h6v6"/>
                  </motion.svg>
                </span>
                
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                
                <motion.div
                  className="absolute inset-0 border-2 border-primary/30 rounded-lg opacity-0"
                  whileHover={{ opacity: 1, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Subtle shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm hover:bg-background/80 hover:border-primary/50 hover:scale-110 transition-all duration-300"
                  aria-label={link.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, duration: 2, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground font-mono">scroll down</span>
            <ArrowDown className="h-6 w-6 animate-bounce text-primary" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}