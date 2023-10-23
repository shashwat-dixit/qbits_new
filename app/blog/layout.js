// import "./globals.css";
// import { Inter } from "next/font/google";
// import Navbar from "./components/Navbar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog | Q-Bits",
};

export default function BlogLayout({ children }) {
    return <section>{children}</section>
  }
