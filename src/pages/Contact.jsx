import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-4 max-w-7xl mx-auto"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-gray-600 text-center mb-12">
          Have questions about our properties? We're here to help you find your perfect vacation home.
        </p>
        
        <ContactForm />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Location</h3>
            <p className="text-gray-600">
              123 Pacific Coast Highway<br />
              Malibu, CA 90265
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-600">
              Phone: (310) 555-0123<br />
              Email: info@casasmalibu.com
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact