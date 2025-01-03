import Image from "next/image";
import Title from "../Globals/Title";

export default function Trust() {
  return (
    <section className="py-20">
      <div className="container">
        <Title
          text="Trusted By The World Leading Organizations"
          classes="lg:mb-9"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {Array.from(Array(4), (_, i) => (
            <div key={i} className="relative flex items-center justify-center">
              <Image
                width={110}
                height={30}
                className="h-[30px] w-[110px] object-contain"
                src={`/sections/trust/${i + 1}.svg`}
                alt=""
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
