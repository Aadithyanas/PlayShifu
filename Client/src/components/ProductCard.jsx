import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(product?.price?.discounted || 0);

  return (
    <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md p-4 mr-4 mx-auto">
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        {product.deal?.flatOff && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
            {product.deal.flatOff}
          </div>
        )}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900 truncate">
        {product.name}
      </h3>
      <p className="mt-2 text-gray-600 font-medium">{formattedPrice}</p>
      <button 
        onClick={() => addToCart(product)}
        className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
