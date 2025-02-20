import React from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaRegCheckCircle, FaMusic, FaFan, FaUsers } from 'react-icons/fa';

const VehicleDetails = () => {
  return (
    <section className="vehicle-details py-12 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300">
      <div className="container mx-auto px-6 md:px-12">
        {/* Title Section */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-blue-800 mb-8"
        >
          Vehicle Details
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <img
              src="path-to-tempo-image.jpg"
              alt="Tempo Traveller"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Vehicle Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 md:pl-12 text-gray-700"
          >
            <p className="text-lg mb-4">
              Our Tempo Traveller is perfect for group travel, offering comfort and space for up to 12 passengers. It's equipped with modern amenities, ensuring that your journey is smooth, relaxing, and enjoyable.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <FaUsers className="text-3xl text-blue-600 mr-4" />
                <span className="font-semibold">Seats: 12+1</span>
              </div>

              <div className="flex items-center">
                <FaFan className="text-3xl text-blue-600 mr-4" />
                <span className="font-semibold">Air Conditioning: Yes</span>
              </div>

              <div className="flex items-center">
                <FaMusic className="text-3xl text-blue-600 mr-4" />
                <span className="font-semibold">Music System: Yes</span>
              </div>

              <div className="flex items-center">
                <FaRegCheckCircle className="text-3xl text-blue-600 mr-4" />
                <span className="font-semibold">Comfortable Seats: Yes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VehicleDetails;
