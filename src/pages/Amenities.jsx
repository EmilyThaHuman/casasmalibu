import React from 'react';
import { motion } from 'framer-motion';

const Amenities = () => {
  const amenities = [
    {
      title: "Jacuzzi",
      description: "Luxurious outdoor jacuzzi with temperature control and massage jets",
      icon: "🌊"
    },
    {
      title: "Panoramic Ocean View",
      description: "Breathtaking 180-degree views of the Pacific Ocean from every room",
      icon: "🌅"
    },
    {
      title: "Full Acre Property",
      description: "Expansive private grounds with lush landscaping and outdoor living spaces",
      icon: "🏡"
    },
    {
      title: "Parrilla Grill",
      description: "Authentic Argentine-style grill for the ultimate outdoor cooking experience",
      icon: "🔥"
    },
    {
      title: "Electric Bikes",
      description: "Complimentary electric bikes for exploring the beautiful Malibu coastline",
      icon: "🚲"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-4 max-w-7xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-center mb-12">Luxury Amenities</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {amenities.map((amenity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-5xl mb-4">{amenity.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{amenity.title}</h3>
            <p className="text-gray-600 leading-relaxed">{amenity.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Additional Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center"
      >
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Experience the perfect blend of luxury and comfort with our carefully curated amenities. 
          Each feature has been selected to enhance your stay and create unforgettable moments.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Amenities; 