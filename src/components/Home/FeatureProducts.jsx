"use client";
import React from "react";
import { useCart } from "@/context/CartContext.jsx";

const FeatureProducts = () => {
  const images = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=704&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=880&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1615396899839-c99c121888b0?q=80&w=687&auto=format&fit=crop",
  ];

  const products = images.map((img, idx) => ({
    id: `featured-${idx}`,
    title: `Featured Product ${idx + 1}`,
    description: "High-quality product perfect for your e-commerce store.",
    image: img,
    price: 99.99 + (idx * 50), // Adding price property
  }));

  const { addToCart } = useCart();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl text-center font-bold text-blue-600 mb-8">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500 flex-grow">
                  {product.description}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProducts;
