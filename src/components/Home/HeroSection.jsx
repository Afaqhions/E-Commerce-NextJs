"use client";

import Slider from "@/components/Home/Slider.jsx";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left side - text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Discover the Best Deals on{" "}
            <span className="text-blue-600">E-Store</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Shop the latest products at unbeatable prices. From electronics to
            fashion, we have everything you need — all in one place.
          </p>
          <Link
            href="/store"
            className="inline-block px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition-colors duration-300"
          >
            Shop Now
          </Link>
        </div>

        {/* Right side - slider */}
        <div className="w-full">
          <Slider />
        </div>
      </div>
    </section>
  );
}
