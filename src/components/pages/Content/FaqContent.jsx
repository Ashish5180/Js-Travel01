import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaQuestionCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

function FaqContent() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I book a cab for my trip?",
      answer: "You can easily book a cab through our website or mobile app. Just enter your travel details like pick-up time, location, and destination, and we will arrange the best vehicle for you."
    },
    {
      question: "Do you provide airport transfers?",
      answer: "Yes, we offer reliable airport transfer services to and from all major airports. Our drivers are punctual and will ensure that you reach your destination comfortably."
    },
    {
      question: "Are your travel packages customizable?",
      answer: "Absolutely! Our travel packages are fully customizable. Whether you're looking for a city tour, weekend getaway, or multi-day excursions, we can tailor a package to suit your needs."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards, PayPal, and cash on delivery. You can choose the method that works best for you."
    },
    {
      question: "Can I cancel or change my booking?",
      answer: "Yes, we offer flexible cancellation and rescheduling options. Please check the terms and conditions for cancellation policies related to your booking type."
    },
    {
      question: "Do you provide travel insurance?",
      answer: "Yes, we offer travel insurance as part of our packages. This includes coverage for trip cancellations, medical emergencies, lost baggage, and more. You can opt for this when booking your trip."
    },
  ];

  return (
    <div className="w-full px-6 py-12 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="text-lg text-gray-600">Find quick answers to your travel-related queries!</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-300 rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left font-semibold text-lg bg-gray-100 hover:bg-blue-100 rounded-t-xl transition duration-300 ease-in-out"
                onClick={() => handleToggle(index)}
              >
                <div className="flex items-center space-x-3">
                  <FaQuestionCircle className="text-xl text-blue-500 group-hover:text-blue-700 transition duration-300" />
                  <span>{faq.question}</span>
                </div>
                <div>
                  {activeIndex === index ? (
                    <FaAngleUp className="text-lg text-blue-500" />
                  ) : (
                    <FaAngleDown className="text-lg text-blue-500" />
                  )}
                </div>
              </button>

              <motion.div
                initial={{ height: 0 }}
                animate={{ height: activeIndex === index ? 'auto' : 0, opacity: activeIndex === index ? 1 : 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="overflow-hidden bg-white px-6 py-4 text-gray-700"
              >
                <p>{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaqContent;