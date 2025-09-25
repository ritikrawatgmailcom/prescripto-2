import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 px-6 md:px-20 py-16 border-t">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {/* Left Section */}
        <div>
          <img className="mb-6 w-40" src={assets.logo} alt="Company Logo" />
          <p className="max-w-md text-sm leading-relaxed text-gray-600">
            We’re committed to delivering excellence. Our mission is to create
            meaningful experiences through innovation, integrity, and
            collaboration.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-gray-900 cursor-pointer">Home</li>
            <li className="hover:text-gray-900 cursor-pointer">About Us</li>
            <li className="hover:text-gray-900 cursor-pointer">Services</li>
            <li className="hover:text-gray-900 cursor-pointer">Careers</li>
            <li className="hover:text-gray-900 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>📞 +1 12121212</li>
            <li>📧 ritikrawat8151@gmail.com</li>
            <li>📍 Pune, Maharashtra, India</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-16 text-center text-xs text-gray-500">
        <p className="py-5 text-sm text-center">© 2025 Ritik — All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
