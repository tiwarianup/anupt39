'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Ideas into Reality?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl mb-8 text-indigo-100"
          >
            Let's collaborate to build innovative AI solutions that drive real business value. Book a consultation today and take the first step towards your next successful project.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="#contact" className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold py-3 px-8 rounded-md transition duration-300 ease-in-out">
              Book a Consultation
            </Link>
            <Link href="#services" className="bg-transparent hover:bg-indigo-700 text-white border border-white font-semibold py-3 px-8 rounded-md transition duration-300 ease-in-out">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA 