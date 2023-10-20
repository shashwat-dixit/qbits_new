import Link from "next/link";
// import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-r from-bgGradRed to-bgGradPurp text-white font-sans">
      
      <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl md:text-6xl text-center font-bold mb-4 animate__animated animate__fadeIn">
          Explore the Quantum Frontier
        </h1>
        <p className="text-lg md:text-xl text-center mb-8 animate__animated animate__fadeIn">
          Unlocking the Power of Quantum Computing
        </p>
        {/* <button className="bg-purple-600 hover:bg-purple-700 text-white text-lg md:text-xl py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 animate__animated animate__bounce">
          Get Started
        </button> */}

        <div className="animate__animated animate__fadeIn">
          <h1 className="text-5xl mt-12">HomePage</h1>
          <Link href="/faqs">
            {/* <a className="text-xl mt-4 text-purple-400 hover:underline">Go to FAQs</a> */}
          </Link>
        </div>
      </div>
    </div>
  );
}
