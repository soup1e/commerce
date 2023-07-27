import Link from "next/link";
import React from "react";

function Landing() {
  return (
    <div
      className="hero h-screen bg-dark"
      style={{ backgroundImage: "url(https://i.imgur.com/s7hVSRs.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-center text-gray-200">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Key-Commerce</h1>
          <p className="mb-5">Shop our new websites products</p>
          <button className="btn btn-accent">
            <Link href="/collections/all">Shop All</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
