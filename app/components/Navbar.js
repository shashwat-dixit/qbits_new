'use client'
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          {/* <a className="text-2xl font-bold text-white">Your Logo</a> */}
        </Link>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <ul className={`lg:flex space-x-4 ${menuOpen ? "block" : "hidden"}`}>
          <li>
            <Link href="/">
              <p className="text-white hover:text-gray-300">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p className="text-white hover:text-gray-300">About</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p className="text-white hover:text-gray-300">Contact</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
