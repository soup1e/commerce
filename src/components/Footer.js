import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-lightDark text-gray-300">
      <div>
        <span className="footer-title">Commerce.Store</span>
        <p className="text-white">
          Blah Blah Blah <br />
          stuff about our store <br />
          store@email.com
        </p>
      </div>
      <div>
        <span className="footer-title">Store</span>
        <Link href="/store" className="link link-hover">
          All Products
        </Link>
        <Link href="#" className="link link-hover">
          Type
        </Link>
        <Link href="#" className="link link-hover">
          Category
        </Link>
      </div>
      <div>
        <span className="footer-title">Information</span>
        <Link href="#" className="link link-hover">
          About Us
        </Link>
        <Link href="#" className="link link-hover">
          Contact
        </Link>
        <Link href="#" className="link link-hover">
          Search
        </Link>
      </div>
      <div>
        <span className="footer-title">News Letter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
