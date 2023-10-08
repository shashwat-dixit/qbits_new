import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="text-5xl">HomePage</h1>
      <Link href="/faqs">Faqs</Link>
    </div>
  );
}
