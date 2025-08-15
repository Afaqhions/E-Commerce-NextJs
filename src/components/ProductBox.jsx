import React from "react";

const ProductBox = ({ image, title, description, price, onAddToCart }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 flex-grow">{description}</p>
        <p className="text-blue-600 font-bold mb-4">${price}</p>

        {/* Add to Cart Button */}
        <button
          onClick={onAddToCart}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductBox;
