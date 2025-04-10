import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const TravelLocationsMap = () => {
  // List of locations and their details
  const locations = [
    {
      name: "Delhi",
      description: "The capital city of India, known for its rich history and culture.",
      top: 30,
      left: 45,
    },
    {
      name: "Bawal",
      description: "A town in Haryana known for its industrial growth.",
      top: 50,
      left: 40,
    },
    {
      name: "Gurgaon",
      description: "A major financial and tech hub in Haryana, near Delhi.",
      top: 35,
      left: 60,
    },
    {
      name: "Manesar",
      description: "A town in Haryana known for its industrial areas and rapid development.",
      top: 55,
      left: 65,
    },
    {
      name: "Neemrana",
      description: "Famous for the Neemrana Fort Palace, located in Alwar district of Rajasthan.",
      top: 50,
      left: 70,
    },
    {
      name: "Sohna",
      description: "A town in Haryana, known for its hot springs and beautiful landscapes.",
      top: 60,
      left: 55,
    },
    {
      name: "Bhiwadi",
      description: "An industrial hub in Alwar, Rajasthan, known for its economic development.",
      top: 40,
      left: 75,
    },
    {
      name: "Tapukra",
      description: "A small town in Rajasthan with historical significance.",
      top: 65,
      left: 80,
    },
    {
      name: "Jhajjar",
      description: "A city in Haryana known for its agricultural and industrial growth.",
      top: 45,
      left: 50,
    },
    {
      name: "Rohtak",
      description: "A city in Haryana known for its universities and historical sites.",
      top: 40,
      left: 52,
    },
    {
      name: "Kharkhoda",
      description: "A small town in Haryana known for its agricultural activities.",
      top: 50,
      left: 53,
    },
    {
      name: "Bahadurgarh",
      description: "A city in Haryana, often referred to as the 'Gateway of Haryana.'",
      top: 60,
      left: 48,
    },
  ];

  return (
    <div className="relative w-full h-screen bg-gray-100">
      {/* Background - Simulating a map */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?map")' }} // Placeholder map image
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Locations Pins and Tooltips */}
      {locations.map((location, index) => (
        <motion.div
          key={index}
          className="absolute flex justify-center items-center"
          style={{
            top: `${location.top}%`,
            left: `${location.left}%`,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: index * 0.3 }}
        >
          <div className="relative">
            {/* Location Pin Icon */}
            <FaMapMarkerAlt className="text-red-600 text-3xl" />

            {/* Tooltip with Description */}
            <motion.div
              className="absolute top-0 left-0 bg-white p-2 rounded shadow-lg text-xs text-gray-800 w-48"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-semibold">{location.name}</h3>
              <p>{location.description}</p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TravelLocationsMap;
