"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCartContext } from "@/components/CartContext";
import getProducts from "@/utils/getProducts";

function SidebarCart({ toggleCart }) {
  const {
    cartItems,
    removeFromCart,
    addCartItemQuantity,
    removeCartItemQuantity,
  } = useCartContext();
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { prices } = await getProducts();
      setPrices(prices);
    };
    fetchProducts();
  }, []);

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const stackedItems = cartItems.reduce((arr, item) => {
    const existingItem = arr.find((stackedItem) => stackedItem.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      const price = prices.find((p) => p.id === item.default_price);
      arr.push({ ...item, quantity: 1, price });
    }
    return arr;
  }, []);

  const totalCost = stackedItems.reduce((total, item) => {
    if (item.price) {
      total += (item.price.unit_amount / 100) * item.quantity;
    }
    return total;
  }, 0);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-lightDark bg-opacity-50"
      onClick={toggleCart}
    >
      <div
        className="sidebar fixed bottom-0 right-0 z-50 h-screen w-80 bg-dark flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-2 border-b-2 border-gray-900">
          <div className="inline-flex font-bold text-lg p-4 text-gray-200">
            Cart: {cartItems.length}
          </div>
          <button className="btn btn-circle btn-ghost m-4" onClick={toggleCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="overflow-auto flex-grow">
          {stackedItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between p-3 text-gray-400 font-normal"
            >
              <span>{item.name}</span>
              <div>
                {item.price ? (
                  <div className="flex items-center">
                    <button
                      className="btn btn-circle btn-ghost mx-1"
                      onClick={() => removeCartItemQuantity(item.id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-circle btn-ghost mx-1"
                      onClick={() => addCartItemQuantity(item.id)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-circle btn-ghost mx-1"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <span>Loading...</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between p-3 text-gray-400 font-bold border-t-2 border-gray-900">
          <span>Subtotal</span>
          <span>
            {totalCost.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
        </div>
        <form
          className="flex justify-center"
          action="/api/checkout"
          method="POST"
        >
          <section>
            <button className="btn" type="submit" role="link">
              Checkout
            </button>
          </section>
        </form>
      </div>
    </div>
  );
}

export default SidebarCart;
