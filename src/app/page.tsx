import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Services from '../../components/Services'
import Expertise from '../../components/Expertise'
import Pricing from '../../components/Pricing'
import Contact from '../../components/Contact'
import Testimonials from '../../components/Testimonials'
import CTA from '../../components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Expertise />
      <Pricing />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
