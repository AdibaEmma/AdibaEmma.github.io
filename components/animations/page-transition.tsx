"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

export function PageTransition({ children, className = "" }: PageTransitionProps) {
  const variants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    enter: { 
      opacity: 1,
      y: 0,
      scale: 1
    },
    exit: { 
      opacity: 0,
      y: -20,
      scale: 1.05
    }
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  )
}

export function SlideTransition({ children, direction = "right" }: { 
  children: ReactNode
  direction?: "left" | "right" | "up" | "down"
}) {
  const directionOffset = {
    left: { x: -300, y: 0 },
    right: { x: 300, y: 0 },
    up: { x: 0, y: -300 },
    down: { x: 0, y: 300 }
  }

  const variants = {
    hidden: { 
      opacity: 0,
      ...directionOffset[direction]
    },
    enter: { 
      opacity: 1,
      x: 0,
      y: 0
    },
    exit: { 
      opacity: 0,
      ...directionOffset[direction]
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  )
}

export function ScaleTransition({ children }: { children: ReactNode }) {
  const variants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      rotateX: -15
    },
    enter: { 
      opacity: 1,
      scale: 1,
      rotateX: 0
    },
    exit: { 
      opacity: 0,
      scale: 1.2,
      rotateX: 15
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      style={{ transformPerspective: 1200 }}
    >
      {children}
    </motion.div>
  )
}