// components/Navbar.js
'use client'
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          {/* <a className="text-white text-xl font-semibold">Your Logo</a> */}
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
        <ul
          className={`${
            menuOpen ? 'block' : 'hidden'
          } lg:flex lg:space-x-4`}
        >
          <li>
            <Link href="/">
              <p className="text-white hover:text-gray-300 cursor-pointer">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p className="text-white hover:text-gray-300 cursor-pointer">About</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p className="text-white hover:text-gray-300 cursor-pointer">Contact</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
