import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaShuttleVan, FaHandsHelping, FaPhoneAlt, FaCar, FaTools, FaHeartbeat } from 'react-icons/fa';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <FaAward className="text-4xl text-yellow-500" />,
      title: 'Top Quality & Value',
      description:
        'We passionately believe in providing the highest quality, best value and have been awarded accolades from our customers and industries.',
    },
    {
      icon: <FaShuttleVan className="text-4xl text-blue-500" />,
      title: 'Seamless & Safe Transportation',
      description:
        'Our aim is to offer trouble-free transportation services at all levels, ensuring timely arrivals and departures while ensuring safety.',
    },
    {
      icon: <FaHandsHelping className="text-4xl text-green-500" />,
      title: '100% Customer Satisfaction',
      description:
        'Driven to provide added value to our corporate clients and achieve 100% customer satisfaction with every service we provide.',
    },
    {
      icon: <FaPhoneAlt className="text-4xl text-red-500" />,
      title: '24/7 Professional Support',
      description:
        'Our dedicated professionals work around the clock to ensure smooth operations and customer support 24/7.',
    },
    {
      icon: <FaCar className="text-4xl text-indigo-500" />,
      title: 'Comfort & Safety Guaranteed',
      description:
        'Each vehicle is equipped with plush upholstery, GPS, cameras, reading lights, and music systems to ensure your comfort and safety.',
    },
    {
      icon: <FaTools className="text-4xl text-gray-500" />,
      title: 'State-of-the-Art Maintenance',
      description:
        'We maintain an in-house high-tech cleaning and maintenance facility to ensure our vehicles are roadworthy and always ready for service.',
    },
    {
      icon: <FaHeartbeat className="text-4xl text-pink-500" />,
      title: 'Emergency Support',
      description:
        'Our trained professionals are available 24/7 to handle emergencies and provide immediate assistance with dedicated support numbers.',
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-16">
      <div className="container mx-auto text-center px-6">
        <motion.h2
          className="text-3xl text-white font-bold mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Us?
        </motion.h2>

        <div className="space-y-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-start space-x-6 px-4 py-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                {benefit.icon}
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
