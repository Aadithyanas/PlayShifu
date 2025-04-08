import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const ProductDetails = ({ product }) => {
  const { addToCart } = useCart();
  const [hasGamepad, setHasGamepad] = useState(false);

  if (!product) return null;

  // Format currency with rupee symbol
  const formatPrice = (price) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Section */}
        <div className="relative">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full rounded-lg"
          />
          <div className="mt-4 grid grid-cols-5 gap-2">
            {/* Thumbnail images */}
            {[1, 2, 3, 4, 5].map((idx) => (
              <div key={idx} className="border border-gray-200 rounded overflow-hidden">
                <img 
                  src={`${product.imageUrl.split('.')[0]}_thumb${idx}.jpg`} 
                  alt={`${product.name} thumbnail ${idx}`}
                  className="w-full h-16 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details Section with scrollable content */}
        <div className="flex flex-col h-full">
          <div className="overflow-y-auto pr-2" style={{ maxHeight: "70vh" }}>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            
            <div className="text-red-500 font-semibold text-sm my-2">
              HURRY! only few left in stock
            </div>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Animal Figurines Smart Kit
            </h2>
            
            {/* Ratings */}
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" clipPath="inset(0 50% 0 0)" />
              </svg>
            </div>
            
            {/* Tags */}
            <div className="flex space-x-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm">
                Parents Choice
              </span>
              <span className="px-3 py-1 bg-red-500 text-white rounded-md text-sm">
                Flat 10% off
              </span>
              <span className="px-3 py-1 bg-yellow-400 text-white rounded-md text-sm">
                PLUGO
              </span>
            </div>
            
            {/* Price */}
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold">
                {formatPrice(product.price?.discounted || 2699)}
              </span>
              <span className="text-xl text-gray-400 line-through ml-2">
                {formatPrice(product.price?.original || 2999)}
              </span>
              <span className="ml-4 text-sm text-gray-600">
                50+ bought last month
              </span>
            </div>
            
            {/* Checkbox for gamepad */}
            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={hasGamepad}
                  onChange={() => setHasGamepad(!hasGamepad)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Already have plugo gamepad</span>
              </label>
            </div>
            
            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex">
                <span className="text-gray-600 mr-2">•</span>
                <p>An adventure-filled journey into the animal kingdom powered by augmented reality (AR)! Perfect for ages 4+.</p>
              </div>
              <div className="flex">
                <span className="text-gray-600 mr-2">•</span>
                <p>With our educational animal toy, use adorable animal figurines off-screen to learn and play with them on-screen.</p>
              </div>
              <div className="flex">
                <span className="text-gray-600 mr-2">•</span>
                <p>Play story-based games, solve challenges, and become a wildlife expert.</p>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            {/* Add to cart button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-purple-800 text-white py-3 px-6 rounded-lg hover:bg-purple-900 transition-colors"
            >
              Add To Cart
            </button>
            
            {/* Information Card */}
            <div className="mt-4 bg-indigo-700 rounded-lg p-6 text-white">
              <div className="grid grid-cols-4 gap-2 text-center mb-6">
                {/* Age Group */}
                <div className="flex flex-col items-center">
                  <div className="bg-yellow-400 rounded-full h-16 w-16 flex items-center justify-center mb-2">
                    <span className="text-indigo-700 font-bold text-xl">4+</span>
                  </div>
                  <span className="text-sm">Age Group</span>
                </div>
                
                {/* Free Shipping */}
                <div className="flex flex-col items-center">
                  <div className="bg-yellow-400 rounded-full h-16 w-16 flex items-center justify-center mb-2">
                    <svg className="w-8 h-8 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                  </div>
                  <span className="text-sm">Free Shipping</span>
                </div>
                
                {/* Warranty */}
                <div className="flex flex-col items-center">
                  <div className="bg-yellow-400 rounded-full h-16 w-16 flex items-center justify-center mb-2">
                    <svg className="w-8 h-8 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-sm">6 months warranty</span>
                </div>
                
                {/* Return Policy */}
                <div className="flex flex-col items-center">
                  <div className="bg-yellow-400 rounded-full h-16 w-16 flex items-center justify-center mb-2">
                    <svg className="w-8 h-8 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"></path>
                    </svg>
                  </div>
                  <span className="text-sm">30 Day Return</span>
                </div>
              </div>
              
              <div className="border-t border-indigo-600 pt-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Device required. Not included with the toy.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Check your device compatibility below.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;