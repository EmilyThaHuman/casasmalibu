import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const About = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container px-4 py-12 mx-auto">
        {/* Hero Section */}
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
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            variants={fadeInUp}
            className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl"
          >
            About Casas Malibu
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="mb-8 text-xl text-gray-600"
          >
            Your luxury beachfront escape in the heart of Malibu
          </motion.p>
        </motion.div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto mt-16">
          {/* Our Story */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="mb-6 text-3xl font-bold text-gray-900"
            >
              Our Story
            </motion.h2>
            <motion.div variants={fadeInUp} className="prose prose-lg text-gray-600">
              <p>
                Nestled along the pristine shores of Malibu, Casas Malibu offers an unparalleled 
                luxury vacation experience. Our beachfront property combines the casual elegance 
                of coastal living with sophisticated modern amenities.
              </p>
              <p>
                Since our establishment, we've been dedicated to providing our guests with 
                memorable stays and exceptional service. Every detail of our property has been 
                carefully curated to ensure your ultimate comfort and relaxation.
              </p>
            </motion.div>
          </motion.section>

          {/* Features */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="mb-6 text-3xl font-bold text-gray-900"
            >
              Property Features
            </motion.h2>
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Luxurious Amenities
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>Fully equipped gourmet kitchen</li>
                  <li>Private infinity pool</li>
                  <li>Outdoor entertainment area</li>
                  <li>High-speed WiFi throughout</li>
                  <li>Smart home features</li>
                </ul>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Prime Location
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>Direct beach access</li>
                  <li>Minutes from shopping and dining</li>
                  <li>Near popular surf spots</li>
                  <li>Close to hiking trails</li>
                  <li>30 minutes from LAX</li>
                </ul>
              </div>
            </motion.div>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="p-8 text-center bg-blue-600 rounded-lg"
          >
            <h2 className="mb-4 text-2xl font-bold text-white">
              Ready to Experience Casas Malibu?
            </h2>
            <p className="mb-6 text-lg text-blue-100">
              Book your stay now and create unforgettable memories
            </p>
            <button
              onClick={() => navigate('/book-now')}
              className="px-8 py-3 text-lg font-semibold text-blue-600 transition-colors bg-white rounded-full hover:bg-blue-50"
            >
              Book Now
            </button>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

export default About