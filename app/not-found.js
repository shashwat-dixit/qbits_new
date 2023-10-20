import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center text-black">
      <h1 className="text-6xl font-bold mb-4 animate-bounce">404</h1>
      <p className="text-2xl mb-8 animate__animated animate__shakeX">
        Uh oh! Page not found.
      </p>
      <p className="text-lg">
        It seems like you&apos;ve ventured into uncharted territory.
      </p>
      <Link href="/">
        <div className="text-2xl mt-8 cursor-pointer flex items-center">
          <span className="underline">Home</span>
        </div>
      </Link>
    </div>
  );
}
