import React from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import fallbackImage from '../assets/waves.jpg' // Adjust the path based on your image location

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="relative">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* Fallback Image */}
          <img
            src={fallbackImage}
            alt="Ocean waves"
            className="absolute w-full h-full object-cover"
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={fallbackImage}
            className="absolute w-full h-full object-cover"
          >
            <source src="/videos/waves.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Luxury Beachfront Living
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Experience the ultimate Malibu lifestyle in our handpicked selection of oceanfront properties
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-x-4"
          >
            <Link 
              to="/properties" 
              className="btn btn-primary inline-block"
            >
              View Properties
            </Link>
            <Link 
              to="/contact" 
              className="btn btn-secondary inline-block"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="p-6">
                <h3 className="mb-4 text-xl font-bold">Beachfront Location</h3>
                <p className="text-gray-600">
                  Step right onto the sandy shores of Malibu Beach from your private patio
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="p-6">
                <h3 className="mb-4 text-xl font-bold">Luxury Amenities</h3>
                <p className="text-gray-600">
                  Enjoy premium furnishings, chef's kitchen, and high-end appliances
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="p-6">
                <h3 className="mb-4 text-xl font-bold">Stunning Views</h3>
                <p className="text-gray-600">
                  Wake up to breathtaking ocean views and spectacular sunsets
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 text-white bg-blue-600">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="mb-6 text-3xl font-bold md:text-4xl"
            >
              Ready to Experience Malibu Living?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="max-w-2xl mx-auto mb-8 text-xl"
            >
              Book your stay now and create unforgettable memories
            </motion.p>
            <motion.button
              variants={fadeInUp}
              onClick={() => navigate('/contact')}
              className="px-8 py-3 text-lg font-semibold text-blue-600 transition-colors bg-white rounded-full hover:bg-blue-50"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home