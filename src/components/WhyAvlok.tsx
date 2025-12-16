'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Clock, DollarSign, TrendingUp, Zap, Shield, Users } from 'lucide-react'

const stats = [
  {
    icon: Clock,
    value: 80,
    suffix: '%',
    label: 'Time Saved',
    description: 'Reduce manual work dramatically',
  },
  {
    icon: DollarSign,
    value: 60,
    suffix: '%',
    label: 'Cost Reduction',
    description: 'Lower operational expenses',
  },
  {
    icon: TrendingUp,
    value: 3,
    suffix: 'x',
    label: 'Scale Faster',
    description: 'Grow without growing headcount',
  },
]

const highlights = [
  {
    icon: Zap,
    title: 'Lightning Fast Implementation',
    description: 'Get up and running in weeks, not months.',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Your data is protected with industry-leading standards.',
  },
  {
    icon: Users,
    title: 'Dedicated Support Team',
    description: 'Expert guidance every step of the way.',
  },
]

function AnimatedCounter({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrameId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * value))

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function WhyAvlok() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section id="why-avlok" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080b10] via-avlok-bg to-[#080b10]" />
      
      {/* Glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-avlok-accent/5 blur-[150px] pointer-events-none" />

      <div ref={containerRef} className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 glass rounded-full text-avlok-accent text-sm font-medium mb-6"
          >
            Why Choose Us
          </motion.span>
          <h2 className="section-title">
            <span className="bg-gradient-to-r from-white to-avlok-text-secondary bg-clip-text text-transparent">
              Why AVLOK AI
            </span>
          </h2>
          <p className="section-subtitle mt-4">
            Results that speak for themselves
          </p>
        </motion.div>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="glass-card p-10 text-center h-full">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-avlok-accent/20 to-avlok-accent-secondary/20 flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300"
                  >
                    <Icon className="w-8 h-8 text-avlok-accent" />
                  </motion.div>

                  {/* Animated number */}
                  <div className="text-5xl md:text-6xl font-bold font-heading bg-gradient-to-r from-avlok-accent to-avlok-accent-secondary bg-clip-text text-transparent mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                  <p className="text-avlok-text-secondary text-sm">{stat.description}</p>

                  {/* Decorative border gradient */}
                  <div className="absolute inset-0 rounded-[20px] p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-avlok-accent/50 to-avlok-accent-secondary/50 blur-sm" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Highlights section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-avlok-accent/20 to-avlok-accent-secondary/20 flex items-center justify-center"
                  >
                    <Icon className="w-6 h-6 text-avlok-accent" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 group-hover:text-avlok-accent transition-colors duration-300">
                      {highlight.title}
                    </h4>
                    <p className="text-avlok-text-secondary text-sm">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
