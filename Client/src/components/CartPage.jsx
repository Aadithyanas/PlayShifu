import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, processPayment, paymentStatus } = useCart();

  if (paymentStatus === 'success') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-green-50 p-6 rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Payment Successful!</h2>
          <p className="text-green-600 mb-4">Thank you for your purchase.</p>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <p>Your cart is empty. <Link to="/" className="text-blue-600 hover:text-blue-800">Continue shopping</Link></p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
            <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded" />
            <div className="flex-grow">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">₹{item.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-white p-4 rounded-lg shadow">
        <div className="text-xl font-semibold">Total: ₹{getCartTotal().toFixed(2)}</div>
        <button 
          onClick={processPayment}
          disabled={paymentStatus === 'processing'}
          className={`mt-4 w-full px-6 py-3 rounded-md text-white transition-colors ${
            paymentStatus === 'processing' 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {paymentStatus === 'processing' ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
              Processing Payment...
            </div>
          ) : (
            'Proceed to Payment'
          )}
        </button>
      </div>
    </div>
  );
};

export default CartPage;