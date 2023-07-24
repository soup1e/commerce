import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-lightDark text-gray-300">
      <div>
        <span className="footer-title">store.sadams.dev</span>
        <p className="text-white">
          Blah Blah Blah <br />
          stuff about our store <br />
          sam.adams7785@gmail.com
        </p>
      </div>
      <div>
        <span className="footer-title">Shop</span>
        <Link href="/store" className="link link-hover">
          All Products
        </Link>
        <Link href="#" className="link link-hover">
          Type
        </Link>
        <Link href="#" className="link link-hover">
          Category
        </Link>
        <Link href="#" className="link link-hover">
          Search
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
      </div>
      <div>
        <span className="footer-title">NEWSLETTER</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">
              Stay up to date with releases and discounts!
            </span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Email Address"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-accent absolute top-0 right-0 rounded-l-none">
              Submit
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
