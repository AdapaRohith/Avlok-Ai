'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Search, PenTool, Code, BarChart3 } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Understand Your Process',
    description: 'We dive deep into your existing workflows, identify bottlenecks, and map out automation opportunities.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design Automation',
    description: 'Our experts design intelligent automation solutions tailored to your specific business requirements.',
  },
  {
    number: '03',
    icon: Code,
    title: 'Build & Integrate',
    description: 'We build and seamlessly integrate AI-powered solutions into your existing tech stack.',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Monitor & Scale',
    description: 'Continuous monitoring, optimization, and scaling to ensure maximum ROI and performance.',
  },
]

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%'])

  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden bg-[#080b10]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 229, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div ref={containerRef} className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 glass rounded-full text-avlok-accent text-sm font-medium mb-6"
          >
            Our Process
          </motion.span>
          <h2 className="section-title">
            <span className="bg-gradient-to-r from-white to-avlok-text-secondary bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="section-subtitle mt-4">
            A proven methodology to transform your business with AI
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated timeline line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-avlok-accent/20 transform md:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-avlok-accent to-avlok-accent-secondary"
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-avlok-bg border-2 border-avlok-accent flex items-center justify-center transform md:-translate-x-1/2 z-10"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 text-avlok-accent" />
                    </motion.div>
                  </motion.div>

                  {/* Content card */}
                  <div className={`w-full md:w-[calc(50%-60px)] pl-20 md:pl-0 ${
                    isEven ? 'md:pr-16' : 'md:pl-16'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="glass-card p-8 group cursor-pointer"
                    >
                      {/* Step number */}
                      <span className="text-6xl font-bold font-heading bg-gradient-to-r from-avlok-accent/20 to-avlok-accent-secondary/20 bg-clip-text text-transparent">
                        {step.number}
                      </span>

                      {/* Title */}
                      <h3 className="text-2xl font-bold font-heading mt-4 mb-3 group-hover:text-avlok-accent transition-colors duration-300">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-avlok-text-secondary leading-relaxed">
                        {step.description}
                      </p>

                      {/* Decorative corner */}
                      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-avlok-accent/20 to-transparent rotate-45" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-[calc(50%-60px)]" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
