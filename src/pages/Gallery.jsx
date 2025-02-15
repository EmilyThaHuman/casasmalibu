import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  {
    id: 1,
    src: '/images/exterior-1.jpg',
    alt: 'House Exterior',
    category: 'exterior'
  },
  {
    id: 2,
    src: '/images/living-room-1.jpg',
    alt: 'Living Room',
    category: 'interior'
  },
  {
    id: 3,
    src: '/images/kitchen-1.jpg',
    alt: 'Kitchen',
    category: 'interior'
  },
  {
    id: 4,
    src: '/images/bedroom-1.jpg',
    alt: 'Master Bedroom',
    category: 'interior'
  },
  {
    id: 5,
    src: '/images/bathroom-1.jpg',
    alt: 'Master Bathroom',
    category: 'interior'
  },
  {
    id: 6,
    src: '/images/pool-1.jpg',
    alt: 'Pool Area',
    category: 'exterior'
  }
]

const categories = ['all', 'interior', 'exterior']

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(image => image.category === selectedCategory)

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container px-4 py-12 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Gallery</h1>
          <p className="mb-8 text-lg text-gray-600">
            Take a visual tour of our luxurious Malibu property
          </p>

          {/* Category Filter */}
          <div className="flex justify-center mb-8 space-x-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors
                  ${selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50'
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
          >
            <AnimatePresence>
              {filteredImages.map(image => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative aspect-w-16 aspect-h-9"
                >
                  <button
                    onClick={() => setSelectedImage(image)}
                    className="overflow-hidden rounded-lg group"
                  >
                    <div className="relative w-full h-64">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
                        <div className="flex items-center justify-center w-full h-full text-white">
                          <span className="text-lg font-medium">{image.alt}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                className="relative max-w-4xl p-4"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-0 right-0 p-2 text-white transition-colors rounded-full hover:bg-white hover:bg-opacity-20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="object-contain w-full max-h-[80vh]"
                />
                <p className="mt-4 text-center text-white">{selectedImage.alt}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Gallery