import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <section className="p-8 bg-dark text-white h-screen flex items-center justify-center">
      <Link
        href="https://github.com/soup1e/commerce"
        target="_blank"
        rel="noopener noreferrer"
        className="btn bg-blue-500 hover:bg-blue-600 text-white flex flex-col items-center justify-center"
      >
        GitHub
      </Link>
    </section>
  );
}
