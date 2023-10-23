import Link from "next/link";
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    // <div className="flex flex-col items-center justify-start h-1/4 bg-gray-900 text-white p-4">
    <div className="flex flex-col items-center justify-start h-1/4">
      <div className="flex justify-between items-center w-full max-w-4xl mx-auto">
        <div className="flex items-center">
            {/* Add the images for Nitte and  Q-Bits*/}
          {/* <img src="/your-logo.png" alt="Your Logo" className="w-12 h-12 mr-4" />
          <img src="/your-logo-2.png" alt="Your Logo 2" className="w-12 h-12" /> */}
        </div>
        <div className="flex items-center just">
          <a href="https://discord.com/invite/pJB5zKGPZt">
            <FaDiscord className="text-3xl mr-4" />
          </a>
          <a href="https://www.instagram.com/qbits_nmit/">
            <FaInstagram className="text-3xl mr-4" />
          </a>
          <a href="linkedin.com/company/qbitsnmit">
            <FaLinkedin className="text-3xl mr-4" />
          </a>
          <a href="mailto:qbits@nmit.ac.in">
            <span className="text-xl mr-4">Email</span>
          </a>
        </div>
      </div>

      <p className="mt-4 text-center">
        &copy;{new Date().getFullYear()} Q-Bits.
      </p>
    </div>
  );
}
