import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropertyCarousel from '../components/PropertyCarousel';
import BookingModal from '../components/BookingModal';

const properties = {
  casasmalibu: {
    title: "Casas Malibu",
    description: "Experience luxury living at its finest in this stunning 5-bedroom oceanfront villa. Featuring panoramic views of the Pacific Ocean, this property offers the perfect blend of modern comfort and coastal charm.",
    price: "$2,500/night",
    bedrooms: 5,
    bathrooms: 5.5,
    sqft: 4500,
    vrboLink: "https://www.vrbo.com/es-mx/propiedad/p3509807vb",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    amenities: [
      "Private Beach Access",
      "Infinity Pool",
      "Home Theater",
      "Chef's Kitchen",
      "Wine Cellar"
    ]
  },
  sandcastle: {
    title: "Sandcastle",
    description: "This modern 4-bedroom beachfront retreat offers a perfect escape with direct beach access and stunning ocean views. Featuring contemporary design and luxurious amenities.",
    price: "$1,800/night",
    bedrooms: 4,
    bathrooms: 4,
    sqft: 3800,
    vrboLink: "#",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    amenities: [
      "Beachfront Location",
      "Heated Pool",
      "Outdoor Kitchen",
      "Fire Pit",
      "Game Room"
    ]
  }
};

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties[id];
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-20"
      >
        <PropertyCarousel images={property.images} />
        
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold mb-4">{property.title}</h1>
              <p className="text-gray-600 mb-6">{property.description}</p>
              
              <h2 className="text-2xl font-semibold mb-4">Property Details</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold">{property.bedrooms}</p>
                  <p className="text-gray-600">Bedrooms</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold">{property.bathrooms}</p>
                  <p className="text-gray-600">Bathrooms</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold">{property.sqft}</p>
                  <p className="text-gray-600">Sq Ft</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold">{property.price}</p>
                  <p className="text-gray-600">per night</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
              <ul className="grid grid-cols-2 gap-4 mb-8">
                {property.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Book this property</h3>
                <p className="text-3xl font-bold text-blue-600 mb-6">{property.price}</p>
                
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="btn btn-primary w-full mb-3 text-center"
                >
                  Book Direct
                </button>
                
                <a
                  href={property.vrboLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full inline-block text-center mb-4"
                >
                  Book on VRBO
                </a>
                
                <div className="text-sm text-gray-600 space-y-2 mt-6">
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Best price guarantee when booking direct
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    No hidden fees
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    24/7 customer support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        propertyTitle={property.title}
        propertyPrice={property.price}
      />
    </>
  );
};

export default PropertyDetail; 