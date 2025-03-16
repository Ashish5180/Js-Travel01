import { motion } from "framer-motion";
import { FaCarSide, FaPlaneDeparture, FaStar, FaBus } from "react-icons/fa";

const services = [
  {
    icon: <FaCarSide className="text-6xl text-blue-600" />, 
    title: "Driver Drive Cabs",
    description: "Choose from economy cars, sedans, SUVs, and more for a hassle-free ride."
  },
  {
    icon: <FaPlaneDeparture className="text-6xl text-green-600" />, 
    title: "Airport Transfer",
    description: "Seamless airport transfers with professional chauffeurs and luxury options."
  },
  {
    icon: <FaStar className="text-6xl text-yellow-500" />, 
    title: "Special Events",
    description: "Luxury cars for weddings, corporate events, and special occasions."
  },
  {
    icon: <FaBus className="text-6xl text-red-500" />, 
    title: "Buses & Tempo Travellers",
    description: "Comfortable travel solutions for groups, tours, and corporate outings."
  }
];

const TravelServices = () => {
  return (
    <section className="py-16 bg-white text-gray-900 relative">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore Our Premium Services
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center bg-white border border-gray-200 p-8 rounded-2xl shadow-lg transform transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-full shadow-md mb-6"
                whileHover={{ rotate: 10 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelServices;
