import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import WhyAvlok from '@/components/WhyAvlok'
import Founders from '@/components/Founders'
import Consultation from '@/components/Consultation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-avlok-bg">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <WhyAvlok />
      <Founders />
      <Consultation />
      <Footer />
    </main>
  )
}
