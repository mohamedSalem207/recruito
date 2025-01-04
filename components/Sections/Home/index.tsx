import Image from "next/image";
import HomeContent from "./Content";
import Autonomous from "../Autonomous";

export default function Home() {
  return (
    <section className="relative">
      <div className="absolute start-0 top-0 h-full w-full bg-[url('/sections/home.jpg')] bg-cover bg-center bg-no-repeat lg:h-[75%]">
        <Image
          src="/globals/pattern.svg"
          className="absolute end-0 top-0"
          width={500}
          height={500}
          alt="pattern"
          draggable={false}
        />

        <Image
          src="/globals/pattern.svg"
          className="absolute bottom-0 start-0 rotate-180"
          width={500}
          height={500}
          alt="pattern"
          draggable={false}
        />
      </div>

      <div className="container relative">
        <HomeContent />

        <Autonomous />
      </div>
    </section>
  );
}
