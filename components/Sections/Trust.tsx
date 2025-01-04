import Image from "next/image";
import Title from "../Globals/Title";

export default function Trust() {
  return (
    <section className="py-10 pb-0 lg:py-20 lg:pb-20">
      <div className="container">
        <Title
          text="Trusted By The World Leading Organizations"
          classes="md:mb-10"
        />

        <div className="grid grid-cols-4 gap-3 sm:gap-5">
          {Array.from(Array(4), (_, i) => (
            <div key={i} className="relative flex items-center justify-center">
              <Image
                width={110}
                height={30}
                className="h-[30px] !w-[60px] object-contain lg:!w-[110px]"
                src={`/sections/trust/${i + 1}.svg`}
                alt="trusted-company"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
