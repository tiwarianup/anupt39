'use client'

import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'
import Link from 'next/link'

const pricingPlans = [
  {
    name: "Consultation",
    price: 50,
    duration: "per hour",
    description: "Expert advice on your AI and software development needs",
    features: [
      "1-on-1 video consultation",
      "Technical assessment",
      "Strategic recommendations",
      "Architecture review",
      "Technology selection guidance"
    ],
    cta: "Book a Session",
    popular: false
  },
  {
    name: "Development",
    price: 75,
    duration: "per hour",
    description: "Hands-on development of your AI and software solutions",
    features: [
      "Custom code development",
      "AI model implementation",
      "Integration with existing systems",
      "Testing and quality assurance",
      "Documentation and knowledge transfer"
    ],
    cta: "Start a Project",
    popular: true
  },
  {
    name: "Enterprise",
    price: 100,
    duration: "per hour",
    description: "End-to-end solutions for complex enterprise requirements",
    features: [
      "Full project management",
      "Team collaboration",
      "Enterprise architecture",
      "Scalability planning",
      "Long-term support options"
    ],
    cta: "Contact for Details",
    popular: false
  }
]

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My <span className="gradient-text">Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Transparent pricing for professional services tailored to your project needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`card relative overflow-hidden ${plan.popular ? 'ring-2 ring-primary' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-white text-xs font-bold px-3 py-1 transform rotate-0 origin-top-right">
                    POPULAR
                  </div>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">{plan.duration}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <FiCheck className="text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className={`block text-center py-3 px-4 rounded-md font-semibold transition-colors ${plan.popular ? 'bg-primary text-white hover:bg-indigo-700' : 'bg-white text-primary border border-primary hover:bg-gray-50'}`}>
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Need a custom solution? Contact me for a personalized quote.
          </p>
          <Link href="#contact" className="btn-primary">
            Get Custom Quote
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing 