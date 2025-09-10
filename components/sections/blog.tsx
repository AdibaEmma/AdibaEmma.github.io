"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, Tag, ArrowRight, BookOpen, TrendingUp, Code, Brain } from "lucide-react"
import Link from "next/link"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  publishedAt: string
  readTime: number
  image: string
  featured: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: "psychology-in-ux-design",
    title: "The Psychology Behind Intuitive UX Design",
    excerpt: "Exploring how psychological principles can transform user experience design, making interfaces more intuitive and user-friendly through understanding human behavior patterns.",
    content: "Full content would go here...",
    category: "Psychology & Tech",
    tags: ["Psychology", "UX/UI", "Design", "Human Behavior"],
    publishedAt: "2024-09-01",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
    featured: true
  },
  {
    id: "ml-microservices-architecture",
    title: "Building Scalable ML Models with Microservices",
    excerpt: "A deep dive into architecting machine learning solutions using microservices patterns, ensuring scalability, maintainability, and efficient deployment strategies.",
    content: "Full content would go here...",
    category: "ML/AI & Engineering",
    tags: ["Machine Learning", "Microservices", "Architecture", "Python"],
    publishedAt: "2024-08-15",
    readTime: 12,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    featured: true
  },
  {
    id: "cognitive-load-in-development",
    title: "Reducing Cognitive Load in Software Development",
    excerpt: "How understanding cognitive psychology can help developers write cleaner code, design better APIs, and create more maintainable software systems.",
    content: "Full content would go here...",
    category: "Psychology & Tech",
    tags: ["Psychology", "Clean Code", "Cognitive Science", "Best Practices"],
    publishedAt: "2024-08-01",
    readTime: 10,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
    featured: true
  },
  {
    id: "ai-ethics-human-behavior",
    title: "AI Ethics and Human Behavioral Patterns",
    excerpt: "Examining the intersection of artificial intelligence, ethics, and human psychology to build more responsible and human-centered AI systems.",
    content: "Full content would go here...",
    category: "ML/AI & Psychology",
    tags: ["AI Ethics", "Psychology", "Machine Learning", "Human Behavior"],
    publishedAt: "2024-07-20",
    readTime: 15,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    featured: false
  },
  {
    id: "stoic-principles-programming",
    title: "Stoic Principles for Better Programming",
    excerpt: "How ancient Stoic philosophy can improve your approach to coding, debugging, and handling the inevitable challenges of software development.",
    content: "Full content would go here...",
    category: "Philosophy & Tech",
    tags: ["Stoicism", "Philosophy", "Programming", "Mindset"],
    publishedAt: "2024-07-05",
    readTime: 7,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop",
    featured: false
  },
  {
    id: "nextjs-performance-optimization",
    title: "Advanced Next.js Performance Optimization Techniques",
    excerpt: "Comprehensive guide to optimizing Next.js applications for better performance, including advanced rendering strategies and caching techniques.",
    content: "Full content would go here...",
    category: "Web Development",
    tags: ["Next.js", "Performance", "React", "Optimization"],
    publishedAt: "2024-06-15",
    readTime: 14,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    featured: false
  }
]

export function BlogSection() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.slice(0, 3)

  const getCategoryIcon = (category: string) => {
    if (category.includes('Psychology')) return Brain
    if (category.includes('ML/AI')) return TrendingUp
    if (category.includes('Philosophy')) return BookOpen
    return Code
  }

  const getCategoryColor = (category: string) => {
    if (category.includes('Psychology')) return "from-purple-500 to-indigo-500"
    if (category.includes('ML/AI')) return "from-green-500 to-emerald-500"
    if (category.includes('Philosophy')) return "from-orange-500 to-red-500"
    return "from-blue-500 to-cyan-500"
  }

  return (
    <section id="blog" className="section-padding bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
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
          <h2 className="section-title gradient-text">Thoughts & Insights</h2>
          <p className="section-subtitle">
            Exploring the intersection of technology, psychology, and human behavior
          </p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Featured Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {featuredPosts.map((post, index) => {
            const CategoryIcon = getCategoryIcon(post.category)
            const categoryColor = getCategoryColor(post.category)
            
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:bg-background/80 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full border border-primary/30">
                    Featured
                  </span>
                </div>

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Category Icon */}
                  <div className={`absolute bottom-4 right-4 p-2 rounded-lg bg-gradient-to-r ${categoryColor} shadow-lg`}>
                    <CategoryIcon className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${categoryColor} text-white`}>
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime} min read
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        <Tag className="h-3 w-3 inline mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <motion.button
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm group-hover:gap-3 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        {/* Recent Articles Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Recent Articles</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => {
              const CategoryIcon = getCategoryIcon(post.category)
              
              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="group bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-background/80 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <CategoryIcon className="h-5 w-5 text-primary" />
                      <span className="text-xs text-muted-foreground">{post.category}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {post.readTime} min
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h4>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                    <motion.button
                      className="text-primary hover:text-primary/80 font-medium text-sm"
                      whileHover={{ x: 2 }}
                    >
                      Read →
                    </motion.button>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </motion.div>

        {/* Blog Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Articles Published', value: '15+', icon: BookOpen },
            { label: 'Topics Covered', value: '8', icon: Tag },
            { label: 'Total Reads', value: '2.5K+', icon: TrendingUp },
            { label: 'Categories', value: '4', icon: Brain }
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="text-center p-4 bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-background/80 hover:border-primary/30 transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Want to discuss any of these topics or share your thoughts?
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg font-medium transition-all border border-primary/20 hover:border-primary/40"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#newsletter"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border/50 hover:border-primary/30 text-foreground hover:text-primary rounded-lg font-medium transition-all hover:bg-background/80"
              >
                Subscribe to Updates
                <BookOpen className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}