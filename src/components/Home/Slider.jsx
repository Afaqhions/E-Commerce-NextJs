"use client"; //CSR

import { useState, useEffect } from "react";

export default function Slider() {
  const images = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=704&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=880&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1615396899839-c99c121888b0?q=80&w=687&auto=format&fit=crop",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 2000); // 2 seconds

    return () => clearInterval(interval); // cleanup
  }, [images.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* Image */}
      <div className="relative h-64 md:h-96">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover transition-all duration-700"
        />
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex
                ? "bg-white"
                : "bg-white/50 hover:bg-white/80"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
