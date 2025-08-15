"use client"; //CSR

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { FiSearch, FiShoppingCart,FiMenu , FiX } from "react-icons/fi";
import { MdStorefront } from "react-icons/md";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useCart();
  const cartCount = cart.length;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            E-Store
          </Link>

          {/* Search bar (desktop) */}
          <div className="hidden md:flex flex-1 justify-center px-4">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white
                           text-gray-800"
              />
              <FiSearch
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4">
            {/* Store link */}
            <Link
              href="/store"
              className="hidden sm:flex items-center gap-1 text-gray-700 hover:text-blue-600"
            >
              <MdStorefront size={20} />
              Store
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative flex items-center text-gray-700 hover:text-blue-600"
            >
              <FiShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX className="text-gray-900" size={22} /> : <FiMenu className="text-gray-900" size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-4 shadow">
          {/* Search (mobile) */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white
                         text-gray-800"
            />
            <FiSearch
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>

          {/* Store link */}
          <Link
            href="/store"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
          >
            <MdStorefront size={20} /> Store
          </Link>

          {/* Cart link */}
          <Link
            href="/cart"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
          >
            <FiShoppingCart size={20} /> Cart ({cartCount})
          </Link>
        </div>
      )}
    </nav>
  );
}
