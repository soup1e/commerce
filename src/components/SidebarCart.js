import React from "react";
import Link from "next/link";

function SidebarCart({ toggleCart, itemsCount }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-lightDark bg-opacity-50"
      onClick={toggleCart}
    >
      <div
        className="sidebar fixed bottom-0 right-0 z-50 h-screen w-80 bg-dark flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-2 border-b-2 border-gray-900">
          <div className="inline-flex font-bold text-lg p-4 text-gray-200">
            Cart: {itemsCount}
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
        <div className="flex flex-col justify-between border-t-2 border-gray-900">
          <div className="flex justify-between p-3 text-gray-400 font-normal">
            <span>Shipping</span>
            <span>$Cost</span>
          </div>
          <div className="flex justify-between p-3 text-gray-400 font-bold">
            <span>Subtotal</span>
            <span>$Cost</span>
          </div>
          <button className="flex justify-center py-2">
            <Link href="/cart" className="btn btn-square px-16">
              Checkout
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SidebarCart;
