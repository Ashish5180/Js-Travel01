import React from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaBus, FaStar } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const ServiceTimeline = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-white to-blue-100 text-gray-800">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center mb-10 uppercase tracking-wide bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          Explore Our Fleet
        </h2>
        <div className="relative border-l-4 border-blue-500 pl-6">
          {/* Mid-Size Cars */}
          <motion.div
            className="mb-10 bg-white p-6 rounded-lg shadow-lg border-l-8 border-blue-500 relative flex flex-row-reverse"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="absolute -left-8 top-6 bg-blue-500 p-2 rounded-full">
              <FaCar size={30} className="text-white" />
            </div>
            <div className="w-2/3">
              <h3 className="text-2xl font-bold">Mid-Size Cars</h3>
              <p className="text-gray-600">Compact, stylish, and fuel-efficient</p>
            </div>
            <div className="flex gap-4 w-1/3">
              <img src="./images/wagnor.jpg" alt="Wagon R" className="w-24 h-16 rounded-md border border-gray-300" />
              <img src="./images/etios.jpg" alt="Etios" className="w-24 h-16 rounded-md border border-gray-300" />
              <img src="./images/swift.jpg" alt="Swift Dzire" className="w-24 h-16 rounded-md border border-gray-300" />
            </div>
          </motion.div>

          {/* Standard Cars */}
          <motion.div
            className="mb-10 bg-white p-6 rounded-lg shadow-lg border-l-8 border-indigo-500 relative flex flex-row-reverse"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="absolute -left-8 top-6 bg-indigo-500 p-2 rounded-full">
              <FaCar size={30} className="text-white" />
            </div>
            <div className="w-2/3">
              <h3 className="text-2xl font-bold">Standard Cars</h3>
              <p className="text-gray-600">Comfort with premium features</p>
            </div>
            <div className="flex gap-4 w-1/3">
              <img src="./images/Aura.jpg" alt="Aura" className="w-24 h-16 rounded-md border border-gray-300" />
              <img src="./images/hondacity.jpg" alt="Honda City" className="w-24 h-16 rounded-md border border-gray-300" />
              <img src="./images/sunny.jpg" alt="Nissan Sunny" className="w-24 h-16 rounded-md border border-gray-300" />
            </div>
          </motion.div>

          {/* Premium Cars */}
          <motion.div
            className="mb-10 bg-white p-6 rounded-lg shadow-lg border-l-8 border-teal-500 relative flex flex-row-reverse"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="absolute -left-8 top-6 bg-teal-500 p-2 rounded-full">
              <FaStar size={30} className="text-white" />
            </div>
            <div className="w-2/3">
              <h3 className="text-2xl font-bold">Premium Cars</h3>
              <p className="text-gray-600">Luxury & performance combined</p>
            </div>
            <div className="flex gap-4 w-1/3">
              <img src="./images/altis.jpg" alt="Toyota Altis" className="w-24 h-16 rounded-md border border-gray-300" />
              <img src="./images/civic.jpeg" alt="Civic" className="w-24 h-16 rounded-md border border-gray-300" />
              <img src="./images/innova.jpg" alt="Innova Crysta" className="w-24 h-16 rounded-md border border-gray-300" />
            </div>
          </motion.div>

          {/* Buses */}
          <motion.div
            className="mb-10 bg-white p-6 rounded-lg shadow-lg border-l-8 border-red-500 relative flex flex-row-reverse"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="absolute -left-8 top-6 bg-red-500 p-2 rounded-full">
              <FaBus size={30} className="text-white" />
            </div>
            <div className="w-2/3">
              <h3 className="text-2xl font-bold">Luxury Buses</h3>
              <p className="text-gray-600">Perfect for large groups & travel</p>
            </div>
            <div className="flex gap-4 w-1/3">
              <img src="./images/traveller.jpg" alt="Traveller" className="w-24 h-16 rounded-md border border-gray-300" />
              <img src="./images/bus.jpg" alt="Bus" className="w-24 h-16 rounded-md border border-gray-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTimeline;
