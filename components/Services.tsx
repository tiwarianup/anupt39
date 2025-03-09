'use client'

import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiCpu, FiCloud, FiLayers, FiTrendingUp, FiBox } from 'react-icons/fi'

const services = [
  {
    icon: <FiCpu className="w-6 h-6" />,
    title: "Generative AI Development",
    description: "Custom generative AI solutions using state-of-the-art models. Specializing in LLMs, diffusion models, and multimodal systems."
  },
  {
    icon: <FiBox className="w-6 h-6" />,
    title: "AI Agent Development",
    description: "Building intelligent AI agents that can perform tasks autonomously. Expertise in RAG, tool use, and multi-agent systems."
  },
  {
    icon: <FiCode className="w-6 h-6" />,
    title: "Full-Stack Development",
    description: "End-to-end web application development with Django, React, and Next.js. Building scalable and maintainable codebases."
  },
  {
    icon: <FiCloud className="w-6 h-6" />,
    title: "Cloud Architecture",
    description: "Design and implementation of cloud-native solutions on Azure. Expertise in serverless, containers, and microservices."
  },
  {
    icon: <FiDatabase className="w-6 h-6" />,
    title: "AI Model Fine-tuning",
    description: "Customizing pre-trained models for specific domains and tasks. Optimizing for performance, accuracy, and efficiency."
  },
  {
    icon: <FiLayers className="w-6 h-6" />,
    title: "AI Strategy Consulting",
    description: "Strategic guidance on AI adoption, implementation roadmaps, and technology selection for maximum business impact."
  }
]

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Specialized expertise to help you build cutting-edge AI applications and robust software solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6"
            >
              <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg w-fit mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 