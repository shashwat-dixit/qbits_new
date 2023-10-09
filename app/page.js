import Link from "next/link";
import Navbar from "./components/Navbar";
// import Faq from "./faqs/Faq";

export default function Page() {
  return (
    <div>
      <Navbar />
      <h1 className="text-5xl">HomePage</h1>
      {/* <Faq /> */}
      <Link href="/faqs">Faqs</Link>
    </div>
  );
}
