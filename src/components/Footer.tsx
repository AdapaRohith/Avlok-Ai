'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Twitter, Linkedin, Github, Instagram, Mail, MapPin, Phone } from 'lucide-react'

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why AVLOK', href: '#why-avlok' },
  { label: 'Contact', href: '#consultation' },
]

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-avlok-accent/50 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-avlok-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Logo */}
              <Link href="/" className="inline-block mb-6">
                <span className="text-3xl font-bold font-heading bg-gradient-to-r from-avlok-accent to-avlok-accent-secondary bg-clip-text text-transparent">
                  AVLOK AI
                </span>
              </Link>

              {/* Tagline */}
              <p className="text-xl text-avlok-text-secondary mb-6">
                Automate Smart. Scale Fast.
              </p>

              {/* Description */}
              <p className="text-avlok-text-secondary/70 max-w-md mb-8">
                We help modern businesses leverage AI automation to streamline operations, 
                reduce costs, and scale without limits.
              </p>

              {/* Social icons */}
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-xl glass flex items-center justify-center text-avlok-text-secondary hover:text-avlok-accent hover:border-avlok-accent/30 transition-colors duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-avlok-text-secondary hover:text-avlok-accent transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-avlok-accent group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:avlokaibusiness@gmail.com"
                  className="text-avlok-text-secondary hover:text-avlok-accent transition-colors duration-300 flex items-center gap-3"
                >
                  <Mail className="w-5 h-5 text-avlok-accent/70" />
                  avlokaibusiness@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918247686179"
                  className="text-avlok-text-secondary hover:text-avlok-accent transition-colors duration-300 flex items-center gap-3"
                >
                  <Phone className="w-5 h-5 text-avlok-accent/70" />
                  +91 8247686179
                </a>
              </li>
              <li className="flex items-start gap-3 text-avlok-text-secondary">
                <MapPin className="w-5 h-5 text-avlok-accent/70 flex-shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana<br />India</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-avlok-text-secondary/60 text-sm">
              © {new Date().getFullYear()} AVLOK AI. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="#"
                className="text-avlok-text-secondary/60 hover:text-avlok-accent transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-avlok-text-secondary/60 hover:text-avlok-accent transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
