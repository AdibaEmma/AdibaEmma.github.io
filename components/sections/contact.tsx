"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Phone, MapPin, Loader2 } from "lucide-react"
import { siteConfig } from "@/lib/constants"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: siteConfig.phone.join(", "),
      href: `tel:${siteConfig.phone[0]}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: siteConfig.location,
    },
  ]

  return (
    <section id="contact" className="section-padding-sm relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      <div className="container-width relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="section-header"
        >
          <h2 className="section-title gradient-text">Get In Touch</h2>
          <p className="section-subtitle">
            Let&apos;s collaborate on something amazing
          </p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto mt-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold mb-4 gradient-text">Let&apos;s Work Together</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I&apos;m always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>
            </motion.div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -30, scale: 0.8 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.4 + index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group relative"
                  >
                    {/* Card with gradient border */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 via-purple-500/30 to-pink-500/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
                    
                    <div className="relative flex items-center gap-4 p-4 bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl group-hover:border-primary/30 transition-all duration-300 group-hover:bg-background/80">
                      <motion.div 
                        className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-primary/20 to-purple-500/20 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 5 }}
                      >
                        <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
                          {item.label}
                        </h4>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                      
                      {/* Hover shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 rounded-xl"
                        initial={{ x: '-100%', opacity: 0 }}
                        whileHover={{ x: '100%', opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="relative"
          >
            {/* Form background with gradient border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-50 blur-sm" />
            
            <div className="relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div 
                  className="grid sm:grid-cols-2 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold mb-2 text-foreground"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all backdrop-blur-sm hover:bg-background/90"
                      placeholder="John Doe"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-2 text-foreground"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all backdrop-blur-sm hover:bg-background/90"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold mb-2 text-foreground"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all backdrop-blur-sm hover:bg-background/90"
                    placeholder="Project Discussion"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2 text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none backdrop-blur-sm hover:bg-background/90"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>

                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    className={`p-4 rounded-xl backdrop-blur-sm font-medium ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 text-green-500 border border-green-500/20"
                        : "bg-red-500/10 text-red-500 border border-red-500/20"
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full px-6 py-4 bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground rounded-xl font-semibold hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 overflow-hidden border-2 border-transparent hover:border-primary/20"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </span>
                    
                    {/* Button animations */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                    
                    {/* Floating particles effect */}
                    <div className="absolute inset-0 overflow-hidden rounded-xl">
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
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}