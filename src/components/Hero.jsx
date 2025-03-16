import React from 'react';
import { HiMenu } from 'react-icons/hi'; // Import React Icons for menu icon
import { FaArrowRight } from 'react-icons/fa'; // Import React Icons for right arrow
import { useNavigate } from 'react-router-dom';
function Hero() {

  const navigate = useNavigate(); // Create a navigate function

  const handleRedirect = () => {
    navigate('/contact'); // Redirect to the contact-us page
  };
  return (
    <div className="w-screen" style={{ backgroundColor: '#f8f8fa' }}>
      {/* Hero Section */}
      <div className="lg:h-[38rem] mx-auto flex max-w-screen-xl flex-col space-y-6 overflow-hidden px-6 pb-16 lg:flex-row lg:items-center">
        
        {/* Left Section: Hero Text */}
        <div className="w-full lg:w-1/2">
          <div className="mt-10 lg:max-w-lg">
            <p className="mb-4 text-xl text-gray-700">— Travel with Comfort & Convenience</p>
            <h1 className="font-[900] text-3xl text-gray-900 lg:text-5xl lg:leading-snug">
              Your Reliable Travel Partner for Stress-Free Journeys
            </h1>

            <div className="mt-8 space-y-5 text-gray-600">
              We offer a variety of cab services, tailored to suit your travel needs. Whether it's airport transfers, sightseeing tours, or city commutes, we've got you covered for a smooth experience.
            </div>
          </div>

          {/* Call to Action: Connect with Us */}
          <div className="mt-8 w-full rounded-md bg-transparent lg:max-w-md">
            <form className="flex flex-col sm:flex-row">
              
              <button
                type="button"
                onClick={handleRedirect}
                className="m-1 h-12 transform rounded-md bg-gray-900 px-4 py-2 text-white transition-colors duration-200 focus:bg-gray-700 focus:outline-none hover:bg-gray-700"
              >
                <FaArrowRight className="inline mr-2" />
                Book a Ride Now
              </button>
            </form>
          </div>
        </div>

        {/* Right Section: Image & Testimonial */}
        <div className="relative hidden h-full w-full items-center justify-center lg:flex lg:w-1/2">
          <div className="absolute z-10 lg:left-0">
            <div className="flex items-center rounded-md border border-gray-100 bg-white px-4 py-3 shadow-lg">
              <img className="h-10 w-10 rounded-full object-cover" src="/images/person.jpg" alt="Client testimonial" />
              <p className="ml-4 w-56">
                <strong className="block text-lg font-medium">Michael Johnson</strong>
                <span className="text-xs text-gray-400">Our loyal customer for 3 years</span>
              </p>
            </div>
            <div className="mt-2 flex flex-col items-start rounded-md border border-gray-100 bg-white px-4 pt-3 pb-6 shadow-lg">
              <strong className="block text-lg font-medium">Customer Satisfaction</strong>
              <div className="mt-4 flex items-center text-xs text-gray-400">
                Service Rating
                <div className="ml-4 h-4 w-56 overflow-hidden rounded-md bg-gray-100">
                  <div className="h-full w-4/5 bg-green-200"></div>
                </div>
              </div>

              <div className="mt-4 flex items-center text-xs text-gray-400">
                Timeliness
                <div className="ml-4 h-4 w-56 overflow-hidden rounded-md bg-gray-100">
                  <div className="h-full w-3/4 bg-blue-200"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Image of cab or travel experience */}
          <img className="-scale-x-100 mt-auto ml-auto h-4/6 object-cover lg:max-w-2xl" src="/images/taxi.jpg" alt="Travel experience" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
