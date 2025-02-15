import React from 'react';
import { motion } from 'framer-motion';

const Properties = () => {
  const properties = [
    {
      id: 1,
      title: "Oceanfront Villa",
      description: "Luxurious 5-bedroom villa with direct beach access",
      price: "$2,500/night",
      image: "/images/property-1.jpg" // You'll need to add these images
    },
    {
      id: 2,
      title: "Sunset Retreat",
      description: "Modern 3-bedroom house with panoramic ocean views",
      price: "$1,800/night",
      image: "/images/property-2.jpg"
    },
    // Add more properties as needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-4 max-w-7xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-center mb-12">Our Properties</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <motion.div
            key={property.id}
            whileHover={{ y: -10 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={property.image}
                alt={property.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
              <p className="text-gray-600 mb-4">{property.description}</p>
              <p className="text-blue-600 font-semibold">{property.price}</p>
              <button className="btn btn-primary w-full mt-4">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Properties; 