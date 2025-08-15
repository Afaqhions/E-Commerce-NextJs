"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600">E-Store</h2>
          <p className="mt-4 text-sm text-gray-600">
            Discover unbeatable deals and the latest trends in fashion,
            electronics, and more — all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><a href="/store" className="hover:text-blue-600">Shop</a></li>
            <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:text-blue-600">FAQ</a></li>
            <li><a href="/shipping" className="hover:text-blue-600">Shipping & Returns</a></li>
            <li><a href="/privacy" className="hover:text-blue-600">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-blue-600">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-400 hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-pink-500 hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-700 hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50 py-4 border-t border-gray-200 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} E-Store. All rights reserved.
      </div>
    </footer>
  );
}
