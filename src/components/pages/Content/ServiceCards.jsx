import React from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaBus } from 'react-icons/fa';

const ServiceCards = () => {
  return (
    <>
      {/* Mid-Size Cars */}
      <motion.div
        className="flex flex-col md:flex-row items-center bg-white rounded-lg p-6 m-4 flex-1 max-w-xs md:max-w-none justify-between shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-800">Mid-Size Cars</h3>
          <div className="text-xl mb-2"><FaCar size={40} className="text-orange-600" /></div>
          <p className="text-gray-600">Models: Wagon R, Etios, Swift Dzire</p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* Wagon R */}
          <img
            src="./images/wagnor.jpg"
            alt="Wagon R"
            className="w-48 h-36 object-cover rounded-lg"
          />
          {/* Etios */}
          <img
            src="./images/etios.jpg"
            alt="Etios"
            className="w-48 h-36 object-cover rounded-lg"
          />
          {/* Swift Dzire */}
          <img
            src="./images/swift.jpg"
            alt="Swift Dzire"
            className="w-48 h-36 object-cover rounded-lg"
          />
        </div>
      </motion.div>

      {/* Standard Cars */}
      <motion.div
        className="flex flex-col md:flex-row items-center bg-white rounded-lg p-6 m-4 flex-1 max-w-xs md:max-w-none justify-between shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

<div className="flex space-x-4 mt-4 md:mt-0">
          {/* Aura */}
          <img
            src="./images/Aura.jpg"
            alt="Aura"
            className="w-48 h-36 object-cover rounded-lg"
          />
          {/* Honda City */}
          <img
            src="./images/hondacity.jpg"
            alt="Honda City"
            className="w-48 h-36 object-cover rounded-lg"
          />
          {/* Nissan Sunny */}
          <img
            src="./images/sunny.jpg"
            alt="Nissan Sunny"
            className="w-48 h-36 object-cover rounded-lg"
          />
          {/* Ertiga */}
          <img
            src="./images/ertiga.jpg"
            alt="Ertiga"
            className="w-48 h-36 object-cover rounded-lg"
          />
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-800">Standard Cars</h3>
          <div className="text-xl mb-2"><FaCar size={40} className="text-blue-600" /></div>
          <p className="text-gray-600">Models: Aura, Honda City, Nissan Sunny, Ertiga</p>
        </div>
        
      </motion.div>

      {/* Premium Cars */}
      <motion.div
        className="flex flex-col md:flex-row items-center bg-white rounded-lg p-6 m-4 flex-1 max-w-xs md:max-w-none justify-between shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-800">Premium Cars</h3>
          <div className="text-xl mb-2"><FaCar size={40} className="text-green-600" /></div>
          <p className="text-gray-600">Models: Toyota Altis, Civic, Innova Crysta</p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* Toyota Altis */}
          <img
            src="./images/altis.jpg"
            alt="Toyota Altis"
            className="w-48 h-36 object-cover rounded-lg"
          />
          {/* Civic */}
          <img
            src="./images/civic.jpeg"
            alt="Civic"
            className="w-48 h-36 object-cover rounded-lg"
          />
          {/* Innova Crysta */}
          <img
            src="./images/innova.jpg"
            alt="Innova Crysta"
            className="w-48 h-36 object-cover rounded-lg"
          />
        </div>
      </motion.div>

      {/* Buses */}
      <motion.div
        className="flex flex-col md:flex-row items-center bg-white rounded-lg p-6 m-4 flex-1 max-w-xs md:max-w-none justify-between shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex space-x-4 mt-4 md:mt-0">
         
          <img
            src="./images/traveller.jpg"
            alt="Toyota Altis"
            className="w-48 h-36 object-cover rounded-lg"
          />
          
          
          
          <img
            src="./images/bus.jpg"
            alt="Innova Crysta"
            className="w-48 h-36 object-cover rounded-lg"
          />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-800">Buses</h3>
          <div className="text-xl mb-2"><FaBus size={40} className="text-red-600" /></div>
          <p className="text-gray-600">Models: Tempo Traveller 17, Traveller 26, Tata S7 Ultra</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Perfect for group travel</li>
            <li>Multiple seating capacities</li>
            <li>Comfortable long-distance travel</li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default ServiceCards;
