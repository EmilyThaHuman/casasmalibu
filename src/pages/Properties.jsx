import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Properties = () => {
  const properties = [
    {
      id: 'casasmalibu',
      title: "Casas Malibu",
      description: "Luxurious 5-bedroom oceanfront villa with panoramic views",
      price: "$2,500/night",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'sandcastle',
      title: "Sandcastle",
      description: "Modern 4-bedroom beachfront retreat with private access",
      price: "$1,800/night",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-4 max-w-5xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-center mb-12">Our Properties</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {properties.map((property) => (
          <motion.div
            key={property.id}
            whileHover={{ y: -10 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto"
          >
            <div className="aspect-w-16 aspect-h-10">
              <img
                src={property.image}
                alt={property.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{property.description}</p>
              <p className="text-blue-600 font-semibold mb-3">{property.price}</p>
              <Link 
                to={`/properties/${property.id}`}
                className="btn btn-primary w-full inline-block text-center text-sm"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Properties; 