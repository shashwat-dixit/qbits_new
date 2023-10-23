import Link from "next/link";
// import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    // <div className="bg-gradient-to-r from-bgGradRed to-bgGradPurp text-white font-sans">
    <div className="bg-gray-950">
      <div className="container mx-auto p-4 flex flex-col items-center justify-center h-screen">
        <h1 className="md:text-6xl text-center font-bold mb-4 text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 animate__animated animate__fadeIn ">
          Explore the Quantum Frontier
        </h1>
        <p className="text-lg md:text-xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 animate__animated animate__fadeIn">
          Unlocking the Power of Quantum Computing
        </p>
        
      </div>
    </div>
  );
}
