'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, CheckCircle, Loader2 } from 'lucide-react'

interface FormData {
  fullName: string
  email: string
  company: string
  automationGoal: string
  budget: string
}

const budgetOptions = [
  'Select budget range',
  'Under $5,000',
  '$5,000 - $15,000',
  '$15,000 - $50,000',
  '$50,000+',
  'Not sure yet',
]

export default function Consultation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    automationGoal: '',
    budget: '',
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required'
    }
    
    if (!formData.automationGoal.trim()) {
      newErrors.automationGoal = 'Please describe what you want to automate'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const inputClasses = `w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl 
    text-white placeholder-avlok-text-secondary/50 outline-none transition-all duration-300
    focus:border-avlok-accent/50 focus:shadow-[0_0_20px_rgba(0,229,255,0.1)]
    hover:border-white/20`

  return (
    <section id="consultation" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-avlok-bg via-[#0a0e14] to-avlok-bg" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-avlok-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-avlok-accent-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div ref={containerRef} className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 glass rounded-full text-avlok-accent text-sm font-medium mb-6"
            >
              Get Started
            </motion.span>
            <h2 className="section-title">
              <span className="bg-gradient-to-r from-white to-avlok-text-secondary bg-clip-text text-transparent">
                Book Your Free Consultation
              </span>
            </h2>
            <p className="section-subtitle mt-4">
              Tell us about your automation needs and let&apos;s explore how we can help
            </p>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Glassmorphism card */}
            <div className="glass-card p-8 md:p-12 relative overflow-hidden">
              {/* Animated border gradient */}
              <div className="absolute inset-0 p-[1px] rounded-[20px]">
                <div className="absolute inset-0 bg-gradient-to-r from-avlok-accent/30 via-avlok-accent-secondary/30 to-avlok-accent/30 rounded-[20px] opacity-50" />
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className="relative z-10 space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div>
                        <label className="block text-sm font-medium mb-2 text-avlok-text-secondary">
                          Full Name *
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`${inputClasses} ${errors.fullName ? 'border-red-500/50' : ''}`}
                        />
                        {errors.fullName && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm mt-1"
                          >
                            {errors.fullName}
                          </motion.p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium mb-2 text-avlok-text-secondary">
                          Email Address *
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className={`${inputClasses} ${errors.email ? 'border-red-500/50' : ''}`}
                        />
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm mt-1"
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Company Name */}
                      <div>
                        <label className="block text-sm font-medium mb-2 text-avlok-text-secondary">
                          Company Name *
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className={`${inputClasses} ${errors.company ? 'border-red-500/50' : ''}`}
                        />
                        {errors.company && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm mt-1"
                          >
                            {errors.company}
                          </motion.p>
                        )}
                      </div>

                      {/* Budget Range */}
                      <div>
                        <label className="block text-sm font-medium mb-2 text-avlok-text-secondary">
                          Budget Range (Optional)
                        </label>
                        <motion.select
                          whileFocus={{ scale: 1.01 }}
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className={`${inputClasses} cursor-pointer`}
                        >
                          {budgetOptions.map(option => (
                            <option key={option} value={option} className="bg-avlok-bg">
                              {option}
                            </option>
                          ))}
                        </motion.select>
                      </div>
                    </div>

                    {/* Automation Goal */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-avlok-text-secondary">
                        What do you want to automate? *
                      </label>
                      <motion.textarea
                        whileFocus={{ scale: 1.01 }}
                        name="automationGoal"
                        value={formData.automationGoal}
                        onChange={handleChange}
                        placeholder="Describe your current challenges and what processes you'd like to automate..."
                        rows={4}
                        className={`${inputClasses} resize-none ${errors.automationGoal ? 'border-red-500/50' : ''}`}
                      />
                      {errors.automationGoal && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-1"
                        >
                          {errors.automationGoal}
                        </motion.p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(0, 229, 255, 0.4)' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-5 bg-gradient-to-r from-avlok-accent to-avlok-accent-secondary rounded-xl font-semibold text-avlok-bg text-lg flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Book Consultation
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-avlok-text-secondary text-sm">
                      We&apos;ll get back to you within 24 hours
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-avlok-accent to-avlok-accent-secondary flex items-center justify-center"
                    >
                      <CheckCircle className="w-10 h-10 text-avlok-bg" />
                    </motion.div>
                    <h3 className="text-3xl font-bold font-heading mb-4">Thank You!</h3>
                    <p className="text-avlok-text-secondary text-lg max-w-md mx-auto">
                      Your consultation request has been received. Our team will reach out to you within 24 hours.
                    </p>
                    <motion.button
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({
                          fullName: '',
                          email: '',
                          company: '',
                          automationGoal: '',
                          budget: '',
                        })
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8 px-8 py-3 border border-avlok-accent rounded-full text-avlok-accent font-medium hover:bg-avlok-accent/10 transition-colors duration-300"
                    >
                      Submit Another Request
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
