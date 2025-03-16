import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg backdrop-blur-lg z-50">
      <div className="container mx-auto flex items-center justify-between p-6">
        {/* Company Logo */}
        <div>
          <Link to="/">
            <img
              src="/logo/logo.png"
              alt="JS Travel Agency Logo"
              className="h-24 w-auto" // Adjust size as needed
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg text-white font-semibold">
          <li>
            <Link to="/" className="hover:text-yellow-400 transition-colors duration-300">Home</Link>
          </li>
          <li>
            <Link to="/tempo-traveller" className="hover:text-yellow-400 transition-colors duration-300">Our Cabs</Link>
          </li>
          <li>
            <Link to="/corporate" className="hover:text-yellow-400 transition-colors duration-300">Corporate</Link>
          </li>
          <li>
            <Link to="/faqs" className="hover:text-yellow-400 transition-colors duration-300">FAQs</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400 transition-colors duration-300">Contact Us</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-gradient-to-r from-blue-400 to-blue-600 p-6 transition-all duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } md:hidden`}
      >
        <ul className="text-lg text-white font-semibold space-y-4">
          <li>
            <Link to="/" className="block" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/tempo-traveller" className="block" onClick={() => setIsOpen(false)}>Tempo Traveller</Link>
          </li>
          <li>
            <Link to="/corporate" className="block" onClick={() => setIsOpen(false)}>Corporate</Link>
          </li>
          <li>
            <Link to="/faqs" className="block" onClick={() => setIsOpen(false)}>FAQs</Link>
          </li>
          <li>
            <Link to="/contact" className="block" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
