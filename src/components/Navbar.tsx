'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why AVLOK', href: '#why-avlok' },
  { label: 'Contact', href: '#consultation' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const { scrollY } = useScroll()
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(11, 15, 20, 0)', 'rgba(11, 15, 20, 0.9)']
  )
  const navBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(10px)'])

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)
      
      // Track active section
      const sections = ['services', 'how-it-works', 'why-avlok', 'founders', 'consultation']
      let current = ''
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = sectionId
            break
          }
        }
      }
      
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        style={{ backgroundColor: navBackground, backdropFilter: navBlur }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          hasScrolled ? 'border-b border-white/10' : ''
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold font-heading bg-gradient-to-r from-avlok-accent to-avlok-accent-secondary bg-clip-text text-transparent"
              >
                AVLOK AI
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '')
                const isActive = activeSection === sectionId
                return (
                  <motion.div
                    key={link.label}
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <Link
                      href={link.href}
                      className={`relative transition-colors duration-300 group ${
                        isActive ? 'text-white' : 'text-avlok-text-secondary hover:text-white'
                      }`}
                    >
                      {link.label}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-avlok-accent to-avlok-accent-secondary transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Link href="#consultation">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 229, 255, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                      activeSection === 'consultation' 
                        ? 'bg-gradient-to-r from-avlok-accent to-avlok-accent-secondary text-avlok-bg shadow-lg shadow-avlok-accent/30' 
                        : 'border border-avlok-accent text-avlok-accent hover:bg-avlok-accent/10'
                    }`}
                  >
                    Book a Call
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed inset-0 z-40 md:hidden"
      >
        {/* Backdrop */}
        <motion.div
          initial={false}
          animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
          className="absolute inset-0 bg-avlok-bg/95 backdrop-blur-lg"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-medium text-white hover:text-avlok-accent transition-colors duration-300"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: navLinks.length * 0.1 }}
          >
            <Link href="#consultation" onClick={() => setIsOpen(false)}>
              <button className="mt-4 px-8 py-4 bg-gradient-to-r from-avlok-accent to-avlok-accent-secondary rounded-full font-semibold text-avlok-bg text-lg">
                Book a Call
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
