import "./globals.css";
import Navbar from "./components/Navbar";


// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Q-Bits",
  description:
    "Welcome to Q-Bits: Exploring Quantum Computing's Potential | India's First Quantum Hackathon - Quant A Maze | Join Us on a Journey to a Secure and Innovative Future. Discover the Quantum Realm with Us.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
