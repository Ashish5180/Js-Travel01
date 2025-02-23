import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaQuestionCircle } from 'react-icons/fa'; // Updated icons
import { motion } from 'framer-motion';

function FaqContent() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same FAQ is clicked again
    } else {
      setActiveIndex(index); // Open the clicked FAQ
    }
  };

  const faqs = [
    {
      question: "Can I cancel at anytime?",
      answer: "Yes, you can cancel anytime with no questions asked. However, we would appreciate any feedback you can provide."
    },
    {
      question: "My team has credits. How do we use them?",
      answer: "Once your team signs up for a subscription plan, we’ll work with you to optimize the process and get started."
    },
    {
      question: "How does Preline's pricing work?",
      answer: "Our subscription plans are tiered, ensuring that we cater to your needs as they evolve over time."
    },
    {
      question: "How secure is Preline?",
      answer: "We take your data security very seriously. Preline uses industry-leading encryption protocols to keep your data safe."
    },
    {
      question: "How do I get access to a theme I purchased?",
      answer: "If you lose the link for a theme you purchased, don't worry! Simply log into your account to retrieve it."
    },
    {
      question: "Upgrade License Type",
      answer: "You can upgrade your license type with us. The original purchase price can be applied toward the new license."
    },
  ];

  return (
    <div className="w-full px-6 py-10 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-extrabold mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="text-lg text-gray-600">Find quick answers to your common queries!</p>
        </div>

        {/* FAQ Accordion Section */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`border border-gray-300 rounded-lg overflow-hidden ${activeIndex === index ? 'shadow-lg' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* FAQ Button */}
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left font-semibold text-lg bg-white hover:bg-gray-100 rounded-t-lg transition duration-300 ease-in-out"
                onClick={() => handleToggle(index)} // Toggle the FAQ
              >
                <div className="flex items-center space-x-3">
                  <FaQuestionCircle className="text-xl text-teal-600" />
                  <span>{faq.question}</span>
                </div>
                <div>
                  {activeIndex === index ? (
                    <FaAngleUp className="text-lg text-teal-600" />
                  ) : (
                    <FaAngleDown className="text-lg text-teal-600" />
                  )}
                </div>
              </button>

              {/* FAQ Content */}
              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: 'easeInOut',
                }}
                className="overflow-hidden bg-gray-50 px-6 py-4"
              >
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaqContent;
