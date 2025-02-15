import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const BookNow = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container px-4 py-12 mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">Book Your Stay</h1>
            <p className="mb-8 text-lg text-gray-600">
              Choose your preferred booking method and start planning your perfect Malibu getaway
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">Book on VRBO</h2>
              <p className="mb-6 text-gray-600">
                Book through our trusted partner VRBO for a secure and convenient booking experience.
              </p>
              <ul className="mb-6 space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Secure payment processing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 customer support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Verified reviews
                </li>
              </ul>
              <a
                href="https://www.vrbo.com/your-listing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full px-6 py-3 text-center text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Book on VRBO
              </a>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">Book Direct</h2>
              <p className="mb-6 text-gray-600">
                Contact us directly for personalized service and the best available rates.
              </p>
              <ContactForm className="mt-4" />
            </div>
          </motion.div>

          {/* Additional Information */}
          <motion.div variants={fadeInUp} className="mt-12">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">Important Information</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-lg font-medium text-gray-900">Check-in/Check-out</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Check-in: 4:00 PM</li>
                    <li>Check-out: 11:00 AM</li>
                    <li>Early check-in available upon request</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-gray-900">Policies</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>No smoking</li>
                    <li>No parties or events</li>
                    <li>Pets allowed (with prior approval)</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default BookNow