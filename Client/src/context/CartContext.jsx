import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [paymentStatus, setPaymentStatus] = useState('');

  const addToCart = (product) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.id == product.id);
      if (existingItem) {
        //console.log(product.id)
        return currentCart.map(item =>
          
          item.id == product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

      }
      console.log(product.price.discounted)
      return [...currentCart, { ...product, quantity: 1 }];
      
    });
  };

  const removeFromCart = (productId) => {
    setCart(currentCart => currentCart.filter(item => item.id != productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(currentCart =>
      currentCart.map(item =>
        item.id == productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price.discounted * item.quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const processPayment = async () => {
    setPaymentStatus('processing');
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setPaymentStatus('success');
    clearCart();
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      getCartTotal,
      processPayment,
      paymentStatus,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}