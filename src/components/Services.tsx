'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cpu, Cog, Bot, Lightbulb } from 'lucide-react'

const services = [
  {
    icon: Cpu,
    title: 'AI Workflow Automation',
    description: 'Transform repetitive tasks into intelligent automated workflows that learn and adapt to your business needs.',
    gradient: 'from-avlok-accent to-cyan-400',
  },
  {
    icon: Cog,
    title: 'Business Process Optimization',
    description: 'Analyze, redesign, and optimize your business processes for maximum efficiency and cost reduction.',
    gradient: 'from-avlok-accent-secondary to-blue-400',
  },
  {
    icon: Bot,
    title: 'Custom AI Agents',
    description: 'Build intelligent AI agents tailored to your specific use cases—customer support, sales, operations, and more.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Lightbulb,
    title: 'Consulting & Strategy',
    description: 'Expert guidance on AI adoption, technology stack selection, and digital transformation roadmaps.',
    gradient: 'from-orange-500 to-yellow-500',
  },
]

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-avlok-bg via-[#0d1219] to-avlok-bg" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-avlok-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-avlok-accent/30 to-transparent" />

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
            Our Services
          </motion.span>
          <h2 className="section-title">
            <span className="bg-gradient-to-r from-white to-avlok-text-secondary bg-clip-text text-transparent">
              What We Do
            </span>
          </h2>
          <p className="section-subtitle mt-4">
            Comprehensive AI solutions designed to transform how you work
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="glass-card p-8 h-full transition-all duration-500 hover:border-avlok-accent/30">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 mb-6 group-hover:shadow-glow transition-shadow duration-300`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <Icon className="w-full h-full text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold font-heading mb-4 group-hover:text-avlok-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-avlok-text-secondary leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-8 right-8 w-10 h-10 rounded-full border border-avlok-accent/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg
                      className="w-5 h-5 text-avlok-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-avlok-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
