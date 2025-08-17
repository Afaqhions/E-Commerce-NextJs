
"use client";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext.jsx";
import ProductBox from "@/components/ProductBox.jsx";

export default function StorePage() {
  const { addToCart } = useCart();
  const products = [
    // Laptops
    {
      id: 1,
      title: "MacBook Pro 16”",
      category: "Laptops",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
      price: 2499,
    },
    {
      id: 2,
      title: "Dell XPS 13",
      category: "Laptops",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
      price: 1499,
    },

    // Headphones
    {
      id: 3,
      title: "Sony WH-1000XM5",
      category: "Headphones",
      image: "https://images.unsplash.com/photo-1583225272823-9f7e6cc0b153?w=500",
      price: 399,
    },
    {
      id: 4,
      title: "AirPods Max",
      category: "Headphones",
      image: "https://images.unsplash.com/photo-1606813902917-1c4a6467b25d?w=500",
      price: 549,
    },

    // Cameras
    {
      id: 5,
      title: "Canon EOS R6",
      category: "Cameras",
      image: "https://images.unsplash.com/photo-1519183071298-a2962be96c85?w=500",
      price: 2499,
    },
    {
      id: 6,
      title: "Nikon Z7",
      category: "Cameras",
      image: "https://images.unsplash.com/photo-1508898578281-774ac4893c0e?w=500",
      price: 2999,
    },

    // Furniture
    {
      id: 7,
      title: "Modern Sofa",
      category: "Furniture",
      image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=500",
      price: 899,
    },
    {
      id: 8,
      title: "Wooden Dining Table",
      category: "Furniture",
      image: "https://images.unsplash.com/photo-1616628188502-c1a89aa7e21d?w=500",
      price: 1299,
    },

    // Plants
    {
      id: 9,
      title: "Monstera Plant",
      category: "Plants",
      image: "https://images.unsplash.com/photo-1616628188502-c1a89aa7e21d?w=500",
      price: 59,
    },
    {
      id: 10,
      title: "Succulent Pack",
      category: "Plants",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500",
      price: 39,
    },

    // Watches
    {
      id: 11,
      title: "Rolex Submariner",
      category: "Watches",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      price: 8999,
    },
    {
      id: 12,
      title: "Casio G-Shock",
      category: "Watches",
      image: "https://images.unsplash.com/photo-1612817159949-99b31c36c847?w=500",
      price: 199,
    },

    // Bags
    {
      id: 13,
      title: "Leather Messenger Bag",
      category: "Bags",
      image: "https://images.unsplash.com/photo-1570215171323-4ec328f3f5fa?w=500",
      price: 179,
    },
    {
      id: 14,
      title: "Backpack",
      category: "Bags",
      image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500",
      price: 89,
    },

    // Shirts
    {
      id: 15,
      title: "Blue T-Shirt",
      category: "Shirts",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
      price: 20,
    },
    {
      id: 16,
      title: "Formal Shirt",
      category: "Shirts",
      image: "https://images.unsplash.com/photo-1584270354949-1d3c1d9c25c7?w=500",
      price: 35,
    },

    // Shoes
    {
      id: 17,
      title: "Running Shoes",
      category: "Shoes",
      image: "https://images.unsplash.com/photo-1600180758895-40c4a55e9ed5?w=500",
      price: 50,
    },
    {
      id: 18,
      title: "Casual Sneakers",
      category: "Shoes",
      image: "https://images.unsplash.com/photo-1528701800489-20be3c2d1a26?w=500",
      price: 45,
    },

    // Mobile
    {
      id: 19,
      title: "iPhone 14",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1671609269075-bbbd418f2f8d?w=500",
      price: 999,
    },
    {
      id: 20,
      title: "Samsung Galaxy S23",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
      price: 899,
    },

    // Cars
    {
      id: 21,
      title: "Sports Car",
      category: "Cars",
      image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500",
      price: 45000,
    },
    {
      id: 22,
      title: "SUV",
      category: "Cars",
      image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=500",
      price: 38000,
    },

    // Other
    {
      id: 23,
      title: "Luxury Watch",
      category: "Other",
      image: "https://images.unsplash.com/photo-.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      price: 1200,
    },
    {
      id: 24,
      title: "Gaming Headset",
      category: "Other",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
      price: 150,
    },
  ]

  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-10 bg-white max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Store
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Categories */}
        <div className="md:w-48 flex-shrink-0">
          {/* Mobile: horizontal scroll */}
          <div className="flex md:hidden gap-3 overflow-x-auto pb-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg border whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Desktop: vertical sidebar */}
          <div className="hidden md:flex flex-col gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg border text-left ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Listing */}
        <div className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductBox
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                onAddToCart={() => addToCart(product)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
