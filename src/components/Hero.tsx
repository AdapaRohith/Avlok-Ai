'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient"
    >
      {/* Animated background particles */}
      <div className="particles-bg">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 10}s`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Static glowing orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-avlok-accent/10 blur-[100px]"
        style={{
          top: '20%',
          left: '10%',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-avlok-accent-secondary/10 blur-[80px]"
        style={{
          bottom: '20%',
          right: '10%',
        }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 text-center"
        >
          {/* Brand badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-block px-6 py-2 glass rounded-full text-avlok-accent text-sm font-medium border border-avlok-accent/30">
              🚀 AI-Powered Automation Solutions
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 leading-tight"
          >
            <span className="block">AVLOK AI</span>
            <span className="block mt-2 bg-gradient-to-r from-avlok-accent to-avlok-accent-secondary bg-clip-text text-transparent">
              Automate What Slows You Down
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-avlok-text-secondary max-w-3xl mx-auto mb-12"
          >
            AI Automations & Consulting for Modern Businesses
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="#consultation">
              <motion.button
                className="px-10 py-5 bg-gradient-to-r from-avlok-accent to-avlok-accent-secondary rounded-full font-semibold text-avlok-bg text-lg transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 0 40px rgba(0, 229, 255, 0.5)' 
                }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Free Consultation
              </motion.button>
            </Link>
            <Link href="#services">
              <motion.button
                className="px-10 py-5 border-2 border-avlok-accent rounded-full font-semibold text-avlok-accent text-lg transition-all duration-300"
                whileHover={{ 
                  backgroundColor: 'rgba(0, 229, 255, 0.1)',
                  boxShadow: '0 0 30px rgba(0, 229, 255, 0.3)' 
                }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Solutions
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
