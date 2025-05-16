import React, { createContext, useState, useContext } from "react";

// Create the context
const CartContext = createContext();

// Create the provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0); // Optional: Track total items

  const addItem = (item) => {
    setCart([...cart, item]);
    setQuantity(quantity + 1);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    setQuantity(quantity - 1);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeFromCart, quantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for easy access
export const UseCart = () => {
  return useContext(CartContext);
};
