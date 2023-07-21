"use client";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const addCartItemQuantity = (itemId) => {
    const cartItem = cartItems.find((item) => item.id === itemId);
    console.log(cartItems);

    if (!cartItem) {
      console.error("Item not Found");
      return;
    }

    const duplicatedItem = { ...cartItem };
    setCartItems((prevItems) => [...prevItems, duplicatedItem]);
  };

  const removeCartItemQuantity = (itemId) => {
    const itemIndex = cartItems.findIndex((item) => item.id === itemId);

    if (itemIndex === -1) {
      return;
    }

    const updatedItems = [...cartItems];
    updatedItems.splice(itemIndex, 1);

    setCartItems(updatedItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        addCartItemQuantity,
        removeCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
