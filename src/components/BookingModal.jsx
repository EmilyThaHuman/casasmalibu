import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const BookingModal = ({ isOpen, onClose, propertyTitle, propertyPrice }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-lg bg-white rounded-lg shadow-xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Book {propertyTitle}</h2>
              <p className="text-gray-600 mb-6">
                Complete the form below to inquire about booking this property at {propertyPrice} per night
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="property_title" value={propertyTitle} />
                <input type="hidden" name="property_price" value={propertyPrice} />
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="user_phone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dates
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="date"
                      name="check_in"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="date"
                      name="check_out"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 text-white rounded-md transition-colors ${
                    isSubmitting 
                      ? 'bg-gray-400' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Booking Request'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-600 text-center">
                    Message sent successfully!
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-center">
                    Error sending message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal; 