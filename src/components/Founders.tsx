'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const founders = [
  {
    name: 'Sushanth Kasturi',
    role: 'Founder & Director',
    bio: 'Visionary leader with deep expertise in AI/ML, driving the strategic vision and innovation at AVLOK AI.',
    image: '/founders/Sushanth.jpg',
    hasImage: true,
    portfolioLink: '#', // TODO: Replace with actual portfolio link
    linkedin: 'https://www.linkedin.com/in/sushanthkasturi',
    twitter: 'https://x.com/SushantKasturi',
  },
  {
    name: 'Adapa Rohith',
    role: 'Co-Founder & CEO',
    bio: 'Tech enthusiast passionate about AI innovation and building scalable automation solutions for modern businesses.',
    image: '/founders/rohith.jpg',
    hasImage: false, // Set to true when image is added
    portfolioLink: '#', // TODO: Replace with actual portfolio link
    linkedin: '#', // TODO: Replace with actual LinkedIn link
    twitter: '#', // TODO: Replace with actual Twitter link
  },
]

export default function Founders() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="founders" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-avlok-bg via-[#0d1219] to-avlok-bg" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-avlok-accent/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-avlok-accent-secondary/5 rounded-full blur-[100px] -translate-y-1/2" />

      <div ref={containerRef} className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 glass rounded-full text-avlok-accent text-sm font-medium mb-6"
          >
            Meet The Team
          </motion.span>
          <motion.h2 variants={itemVariants} className="section-title">
            <span className="bg-gradient-to-r from-white to-avlok-text-secondary bg-clip-text text-transparent">
              Our Founders
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle mt-4">
            The visionaries behind AVLOK AI, dedicated to transforming businesses through intelligent automation
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              variants={itemVariants}
              className="group"
            >
              <div className="glass-card p-8 h-full transition-all duration-500 hover:border-avlok-accent/30 text-center">
                {/* Profile Image */}
                <div className="relative w-36 h-36 mx-auto mb-6">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-avlok-accent/20 to-avlok-accent-secondary/20 flex items-center justify-center overflow-hidden border-2 border-avlok-accent/30 group-hover:border-avlok-accent/60 transition-all duration-500 shadow-lg group-hover:shadow-avlok-accent/20">
                    {founder.hasImage ? (
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="object-cover rounded-full"
                        sizes="144px"
                      />
                    ) : (
                      <span className="text-4xl font-bold text-avlok-accent">
                        {founder.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    )}
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-avlok-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold font-heading mb-2 group-hover:text-avlok-accent transition-colors duration-300">
                  {founder.name}
                </h3>

                {/* Role */}
                <p className="text-avlok-accent font-medium mb-4">
                  {founder.role}
                </p>

                {/* Bio */}
                <p className="text-avlok-text-secondary leading-relaxed mb-6">
                  {founder.bio}
                </p>

                {/* Links */}
                <div className="flex items-center justify-center gap-4">
                  {/* Portfolio Link */}
                  <Link 
                    href={founder.portfolioLink}
                    className="px-6 py-2 glass rounded-full text-sm font-medium text-avlok-accent border border-avlok-accent/30 hover:bg-avlok-accent/10 hover:border-avlok-accent/60 transition-all duration-300"
                  >
                    Portfolio
                  </Link>

                  {/* Social Links */}
                  <Link 
                    href={founder.linkedin}
                    className="w-10 h-10 glass rounded-full flex items-center justify-center text-avlok-text-secondary hover:text-avlok-accent hover:border-avlok-accent/30 transition-all duration-300"
                    aria-label={`${founder.name}'s LinkedIn`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </Link>

                  <Link 
                    href={founder.twitter}
                    className="w-10 h-10 glass rounded-full flex items-center justify-center text-avlok-text-secondary hover:text-avlok-accent hover:border-avlok-accent/30 transition-all duration-300"
                    aria-label={`${founder.name}'s Twitter`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </Link>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-avlok-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
