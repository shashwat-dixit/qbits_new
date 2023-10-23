// import Card from "../components/Card";

export const metadata = {
  title: "Our Members | Q-Bits",
};

export default function Team() {
  return (
    
    <>
    {/* 
      1- Remove this clunky of dividing and laying out screen.
      2- Improve the card design and move away from using this design. 
    */}
      <div className="flex flex-col items-center justify-start h-1/4">
        <h1 className="text-4xl sm:text-xl font-bold mt-4 mb-6 text-center">
          Faculty Members
        </h1>
      </div>

      <div className="flex flex-col items-center justify-start h-1/4">
        <h1 className="text-4xl sm:text-xl font-bold mt-4 mb-6 text-center">
          Student Members
        </h1>
      </div>
      <div className="flex flex-col items-center justify-start h-1/3">
        <h1 className="text-4xl sm:text-xl font-bold mt-4 mb-6 text-center">
          Founders
        </h1>
      </div>
    </>
  );
}
