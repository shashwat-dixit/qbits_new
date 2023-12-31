"use client";
import Link from "next/link";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-950 text-white font-sans p-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          {/* Temporary addition until the logo is not ready. */}
          <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center m-4  text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 animate__animated animate__fadeIn">
            Q-BITS
          </p>
        </Link>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
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
          className={`lg:flex lg:space-x-4 ${
            menuOpen
              ? "lg:hidden absolute top-10 left-0 text-center w-full bg-gray-950"
              : "hidden"
          }`}
        >
          <li>
            <Link href="/">
              <p className="text-white text-xl hover:text-gray-500 block py-2 px-4">
                Home
              </p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p className="text-white text-xl hover:text-gray-500 block py-2 px-4">
                About
              </p>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <p className="text-white text-xl hover:text-gray-500 block py-2 px-4">
                Blog
              </p>
            </Link>
          </li>
          <li>
            <Link href="/research">
              <p className="text-white text-xl hover:text-gray-500 block py-2 px-4">
                Research
              </p>
            </Link>
          </li>
          <li>
            <Link href="/team">
              <p className="text-white text-xl hover:text-gray-500 block py-2 px-4">
                Team
              </p>
            </Link>
          </li>

          <li>
            <Link href="/contact">
              <p className="text-white text-xl hover:text-gray-500 block py-2 px-4">
                Contact Us
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
