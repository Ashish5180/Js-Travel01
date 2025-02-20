import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 w-full bg-gradient-to-r from-white to-blue-400 bg-opacity-90 shadow-md backdrop-blur-lg z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo with Nature Symbol */}
        <div className="flex items-center space-x-2">
          <Leaf size={28} className="text-blue-700" />
          <h1 className="text-2xl font-bold  text-blue-700">JS Travel Agency</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg text-white">
          <li><Link to="/" className="hover:text-green-200 transition">Home</Link></li>
          <li><Link to="/tempo-traveller" className="hover:text-green-200 transition">Tempo Traveller</Link></li>
          <li><Link to="/corporate" className="hover:text-green-200 transition">Corporate</Link></li>
          <li><Link to="/faqs" className="hover:text-green-200 transition">FAQs</Link></li>
          <li><Link to="/contact" className="hover:text-green-200 transition">Contact Us</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`absolute top-0 left-0 w-full bg-gradient-to-r from-white to-blue-400  p-6 transition-all duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } md:hidden`}
      >
        <ul className="text-lg text-blue-700 space-y-4">
          <li><Link to="/" className="block" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/tempo-traveller" className="block" onClick={() => setIsOpen(false)}>Tempo Traveller</Link></li>
          <li><Link to="/corporate" className="block" onClick={() => setIsOpen(false)}>Corporate</Link></li>
          <li><Link to="/faqs" className="block" onClick={() => setIsOpen(false)}>FAQs</Link></li>
          <li><Link to="/contact" className="block" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;