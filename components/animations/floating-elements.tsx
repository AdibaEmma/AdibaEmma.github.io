"use client"

import { motion } from "framer-motion"
import { Code2, Terminal, Cpu, Database, Zap, Wifi, Settings, GitBranch } from "lucide-react"

export function FloatingElements() {
  const elements = [
    { icon: Code2, x: '10%', y: '20%', duration: 20, delay: 0 },
    { icon: Terminal, x: '80%', y: '30%', duration: 25, delay: 2 },
    { icon: Cpu, x: '15%', y: '60%', duration: 30, delay: 4 },
    { icon: Database, x: '85%', y: '70%', duration: 22, delay: 1 },
    { icon: Zap, x: '25%', y: '80%', duration: 28, delay: 3 },
    { icon: Wifi, x: '70%', y: '15%', duration: 24, delay: 5 },
    { icon: Settings, x: '50%', y: '90%', duration: 26, delay: 2.5 },
    { icon: GitBranch, x: '90%', y: '50%', duration: 23, delay: 1.5 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => {
        const Icon = element.icon
        return (
          <motion.div
            key={index}
            className="absolute text-primary/10"
            style={{ left: element.x, top: element.y }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="h-8 w-8 md:h-12 md:w-12" />
          </motion.div>
        )
      })}
      
      {/* Floating particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}