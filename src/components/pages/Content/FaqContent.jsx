import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'; // Importing React Icons
import { motion } from 'framer-motion';

function FaqContent() {

  const [activeIndex, setActiveIndex] = useState(null); 
  // State to track which FAQ is active

  const handleToggle = (index) => {
    // Toggle the active index
    if (activeIndex === index) {
      setActiveIndex(null); // If it's already open, close it
    } else {
      setActiveIndex(index); // Open the selected FAQ
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
    <div className="w-screen px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-white text-gray-900">
      <div className="grid md:grid-cols-5 gap-10">
        {/* Left Column (Title) */}
        <div className="md:col-span-2">
          <div className="max-w-xs">
            <h2 className="text-3xl font-bold md:text-4xl md:leading-tight">
              Frequently
              <br />
              Asked Questions
            </h2>
            <p className="mt-1 hidden md:block text-gray-400">
              Find answers to the most frequently asked questions.
            </p>
          </div>
        </div>

        {/* Right Column (FAQ Accordion) */}
        
        <div className="md:col-span-3">
          <div className="hs-accordion-group divide-y divide-gray-700 text-black">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="hs-accordion pt-6 pb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <button
                  onClick={() => handleToggle(index)} // Toggle the clicked FAQ
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-black rounded-lg transition hover:text-gray-300 focus:outline-none focus:text-gray-300"
                  aria-expanded={activeIndex === index} // Control aria-expanded based on the active index
                >
                  {faq.question}
                  <span className="hs-accordion-active:hidden block shrink-0 text-gray-600 group-hover:text-gray-300">
                    <FaAngleDown />
                  </span>
                  <span className="hs-accordion-active:block hidden shrink-0 text-gray-600 group-hover:text-gray-300">
                    <FaAngleUp />
                  </span>
                </button>

                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: activeIndex === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="hs-accordion-content overflow-hidden transition-[height] duration-300"
                  role="region"
                  aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}
                >
                  <p className="text-gray-400">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqContent;
