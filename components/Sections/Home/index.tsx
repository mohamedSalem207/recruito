import Navbar from "@/components/Navbar";
import Image from "next/image";
import HomeContent from "./Content";

export default function Home() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-[url('/sections/home.jpg')] bg-cover bg-center bg-no-repeat">
      <Navbar />

      <Image
        src="/globals/pattern.png"
        className="absolute end-0 top-0"
        width={500}
        height={500}
        alt="pattern"
        draggable={false}
      />

      <div className="container">
        <HomeContent />
      </div>

      <Image
        src="/globals/pattern.png"
        className="absolute bottom-0 start-0 rotate-180"
        width={500}
        height={500}
        alt="pattern"
        draggable={false}
      />
    </section>
  );
}
