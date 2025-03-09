'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: "Generative AI", level: 95 },
  { name: "Django", level: 90 },
  { name: "Azure", level: 85 },
  { name: "Python", level: 95 },
  { name: "React/Next.js", level: 80 },
  { name: "Ollama", level: 90 },
  { name: "Model Fine-tuning", level: 85 },
  { name: "Cloud Architecture", level: 80 },
]

const experiences = [
  {
    period: "2020 - Present",
    title: "Senior AI Engineer",
    company: "AI Solutions Inc.",
    description: "Led the development of enterprise-grade generative AI applications. Architected and implemented end-to-end solutions using Azure and Django."
  },
  {
    period: "2017 - 2020",
    title: "Software Architect",
    company: "Tech Innovations Ltd.",
    description: "Designed scalable cloud-native applications. Implemented microservices architecture and DevOps practices for continuous delivery."
  },
  {
    period: "2014 - 2017",
    title: "Full-Stack Developer",
    company: "Digital Systems Corp.",
    description: "Developed web applications using Django and React. Implemented RESTful APIs and database solutions for various business domains."
  },
]

const Expertise = () => {
  return (
    <section id="expertise" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My <span className="gradient-text">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            With 10+ years of experience, I've developed a diverse skill set across AI, software development, and cloud technologies
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                  <h4 className="text-xl font-bold mt-1">{exp.title}</h4>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Expertise 