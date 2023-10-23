export const metadata = {
  title: "About | Q-Bits",
};

export default function Page() {
  return (
    <div className="flex h-screen">
      <div className="hidden sm:block sm:w-1/2 bg-gray-200 text-black">
        <h1>Left Side</h1>
      </div>
      <div className="w-screen sm:w-1/2 bg-gray-950 text-white">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-4xl text-center mt-4">
          Centered Heading
        </h1>
        <p class="text-sm sm:text-base md:text-lg lg:text-xl text-justify p-4 mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
          inventore veritatis quia nostrum doloremque, porro placeat nemo nobis,
          vero beatae ipsum sequi delectus error! Unde aut facere tenetur soluta
          ab! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          neque perspiciatis accusamus ab sint est? Iusto beatae quibusdam
          ducimus! Ipsum rem ipsa doloremque aliquid omnis accusantium
          voluptates? Incidunt, maxime sapiente!
        </p>
        <p class="text-sm sm:text-base md:text-lg lg:text-xl text-justify p-4 mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
          inventore veritatis quia nostrum doloremque, porro placeat nemo nobis,
          vero beatae ipsum sequi delectus error! Unde aut facere tenetur soluta
          ab! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          neque perspiciatis accusamus ab sint est? Iusto beatae quibusdam
          ducimus! Ipsum rem ipsa doloremque aliquid omnis accusantium
          voluptates? Incidunt, maxime sapiente!
        </p>
      </div>
    </div>
  );
}
