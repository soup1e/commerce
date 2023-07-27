"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useCartContext } from "@/components/CartContext";
import SidebarCart from "./SidebarCart";
import Session from "./NavSession";

export default function Nav() {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems } = useCartContext();

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <nav className="navbar bg-dark items-center text-white ">
      <button className="navbar-start hidden lg:flex">
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl lg:flex hidden"
        >
          Commerce
        </Link>
      </button>

      <div className="navbar-start lg:hidden">
        <div className="dropdown dropdown-bottom dropdown-hover">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <details>
                <summary>Shop</summary>
                <ul className="p-2">
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
                    <Link href="/collections/deskmats">Desk Mats</Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <Link href="/market">Community Market</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/collections/all">Search</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <div className="dropdown dropdown-bottom dropdown-hover">
              <Link href="/collections/all">Shop</Link>
              <ul
                tabIndex={0}
                className="dropdown-content text-white menu bg-lightDark rounded-lg z-50 p-2 w-52"
              >
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
                  <Link href="/collections/deskmats">Desk Mats</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="/market">Community Market</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-4 flex-end">
        <Session />

        <Link
          className="btn btn-square btn-ghost hidden md:flex"
          href="/collections/all"
        >
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
        </Link>

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
            <span className="badge badge-sm indicator-item">
              {cartItems.length}
            </span>
          </div>
        </button>
      </div>

      {cartOpen && <SidebarCart toggleCart={toggleCart} />}
    </nav>
  );
}
