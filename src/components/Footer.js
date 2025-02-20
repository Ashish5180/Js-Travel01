import React from 'react'

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 bottom-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Company</h3>
            <p className="text-sm text-gray-300 mb-4">
              We are committed to providing eco-friendly transportation solutions that contribute to the preservation of our planet. Join us in reducing carbon emissions while traveling comfortably and conveniently.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <svg className="text-gray-300 hover:text-white" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zM10.02 18v-6h2.02v6h3.58v-9h-3.58v2.57h-2.02v-2.57h-3.6v9h3.6v-6h-1.94v6h2.02z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <svg className="text-gray-300 hover:text-white" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.49 4.05c-.88.39-1.83.65-2.83.77 1.02-.61 1.8-1.58 2.17-2.73-.95.56-2.01.96-3.14 1.18-.89-.95-2.15-1.53-3.55-1.53-2.69 0-4.88 2.19-4.88 4.88 0 .38.04.75.11 1.1-4.06-.2-7.65-2.14-10.05-5.09-.42.72-.66 1.56-.66 2.46 0 1.7.86 3.2 2.17 4.07-.8-.03-1.55-.24-2.21-.6v.06c0 2.38 1.69 4.37 3.94 4.83-.41.11-.85.17-1.29.17-.31 0-.61-.03-.91-.08.62 1.92 2.42 3.32 4.55 3.36-1.67 1.31-3.77 2.1-6.05 2.1-.39 0-.78-.02-1.16-.07 2.17 1.39 4.75 2.2 7.55 2.2 9.06 0 14.02-7.51 14.02-14.02 0-.21 0-.42-.02-.63.96-.7 1.78-1.56 2.43-2.54z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <svg className="text-gray-300 hover:text-white" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 3h-8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2zm-4 15c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm3-6h-2v-1.5h2v1.5zm0-3h-2v-1.5h2v1.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#rides" className="text-sm text-gray-300 hover:text-white">Eco-Friendly Rides</a></li>
              <li><a href="#subscriptions" className="text-sm text-gray-300 hover:text-white">Ride Subscriptions</a></li>
              <li><a href="#corporate" className="text-sm text-gray-300 hover:text-white">Corporate Solutions</a></li>
              <li><a href="#green-rewards" className="text-sm text-gray-300 hover:text-white">Green Rewards Program</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#contact" className="text-sm text-gray-300 hover:text-white">Contact</a></li>
              <li><a href="#careers" className="text-sm text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#privacy-policy" className="text-sm text-gray-300 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <form>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-900"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-900"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-900"
                  rows="4"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-400">
          <p>&copy; 2025 EcoCab, All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
