'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { FiMail, FiPhone, FiCalendar, FiMapPin } from 'react-icons/fi'
import { InlineWidget } from 'react-calendly'

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState<'form' | 'calendar'>('form')
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setError('')
    
    try {
      // For GitHub Pages (static site), use email mailto link as fallback
      if (typeof window !== 'undefined' && 
          (window.location.hostname.includes('github.io') || 
           window.location.pathname.includes('/anupt39'))) {
        const subject = encodeURIComponent(data.subject);
        const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`);
        window.open(`mailto:anup.tiwari39@gmail.com?subject=${subject}&body=${body}`);
        setIsSuccess(true);
        reset();
      } else {
        // Regular API route for development and other hosting
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        
        const result = await response.json()
        
        if (!response.ok) {
          throw new Error(result.error || 'Something went wrong')
        }
        
        setIsSuccess(true)
        reset()
      }
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (err: any) {
      console.error('Error submitting form:', err)
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Get in <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Have a project in mind? Let's discuss how I can help you achieve your goals
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
              <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
                <button
                  className={`py-3 px-5 font-medium ${activeTab === 'form' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
                  onClick={() => setActiveTab('form')}
                >
                  Contact Form
                </button>
                <button
                  className={`py-3 px-5 font-medium ${activeTab === 'calendar' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
                  onClick={() => setActiveTab('calendar')}
                >
                  Book a Call
                </button>
              </div>
              
              {activeTab === 'form' ? (
                <form onSubmit={handleSubmit(onSubmit)} className="text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Your Name</label>
                      <input
                        id="name"
                        type="text"
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-gray-700 ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                        placeholder="John Doe"
                        {...register('name', { required: 'Name is required' })}
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Your Email</label>
                      <input
                        id="email"
                        type="email"
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-gray-700 ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                        placeholder="john@example.com"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-gray-700 ${errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                      placeholder="Project Inquiry"
                      {...register('subject', { required: 'Subject is required' })}
                    />
                    {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-gray-700 ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                      placeholder="Tell me about your project..."
                      {...register('message', { required: 'Message is required' })}
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                  </div>
                  
                  {error && (
                    <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-md">
                      {error}
                    </div>
                  )}
                  
                  {isSuccess && (
                    <div className="mb-6 p-3 bg-green-100 text-green-700 rounded-md">
                      Your message has been sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </button>
                </form>
              ) : (
                <div className="h-[600px]">
                  <InlineWidget url="https://calendly.com/anuptiwari32/30min" />
                </div>
              )}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg mr-4">
                    <FiMail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:anup.tiwari39@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                      anup.tiwari39@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg mr-4">
                    <FiPhone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a href="tel:+918847462956" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                      +91 88474 62956
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg mr-4">
                    <FiCalendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Availability</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monday - Friday<br />
                      9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg mr-4">
                    <FiMapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Remote - Worldwide<br />
                      Based in India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 