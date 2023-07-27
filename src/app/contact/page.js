import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <section className="p-8 bg-dark text-white h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-4">Contact</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Phone:</h2>
          <p>3608390942</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Email:</h2>
          <p>sam.adams7785@gmail.com</p>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Links:</h2>
          <ul className="mt-4 space-y-4 ">
            <li>
              <Link
                href="https://github.com/soup1e"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-blue-500 hover:bg-blue-600 text-white flex flex-col items-center justify-center"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/samsadams"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-indigo-500 hover:bg-indigo-600 text-white flex flex-col items-center justify-center"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://sadams.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-purple-500 hover:bg-purple-600 text-white flex flex-col items-center justify-center"
              >
                sadams.dev
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
