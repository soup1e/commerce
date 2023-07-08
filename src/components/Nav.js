"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [cartOpen, setCartOpen] = useState(false);
  const [itemsCount, setItemsCount] = useState(4);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className="navbar bg-dark">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Commerce
        </Link>
      </div>

      <div class="navbar-start hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li tabindex="0">
            <details>
              <summary>Shop</summary>
              <ul class="p-2">
                <li>
                  <Link href="/collections/all">All</Link>
                </li>
                <li>
                  <Link href="/collections/keyboards">Keyboards</Link>
                </li>
                <li>
                  <Link href="/collections/keycaps">Keycaps</Link>
                </li>
                <li>
                  <Link href="/collections/switches">Switches</Link>
                </li>
                <li>
                  <Link href="/collections/switches">Other</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/cbout">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex-none gap-4 flex items-center">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button className="btn btn-square btn-ghost" onClick={toggleCart}>
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                clipRule="evenodd"
              />
            </svg>
            <span className="badge badge-sm indicator-item">{itemsCount}</span>
          </div>
        </button>
      </div>

      {cartOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark bg-opacity-50"
          onClick={toggleCart}
        >
          <div
            className="sidebar fixed top-0 right-0 z-50 h-screen w-80  bg-dark"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-2 border-b-2 border-gray-900">
              <div className="inline-flex font-bold text-lg p-4 text-gray-200">
                Cart: {itemsCount}
              </div>
              <button
                className="btn btn-circle btn-ghost m-4"
                onClick={toggleCart}
              >
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
          </div>
        </div>
      )}
    </div>
  );
}
