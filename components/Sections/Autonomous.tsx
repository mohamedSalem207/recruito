import Image from "next/image";
import Title from "../Globals/Title";

export default function Autonomous() {
  return (
    <section>
      <div className="container">
        <div className="relative h-fit rounded-[30px] bg-gradient-to-b from-[#CFD8E34D] to-transparent p-5">
          <Image
            src="/sections/autonomous/featured.png"
            width={212}
            height={214}
            className="absolute -start-[106px] top-[40%] z-20"
            alt="featured"
            draggable={false}
          />

          <Image
            src="/sections/autonomous/customers.png"
            width={212}
            height={214}
            className="absolute -end-[106px] top-[17%] z-20"
            alt="customers"
            draggable={false}
          />

          <div className="absolute bottom-0 start-0 z-10 h-[30%] w-full bg-gradient-to-t from-white to-transparent backdrop-blur-[1px]" />

          <Title text="See how we create an autonomous">
            <span className="underline">Ai Agent</span>
          </Title>

          <div className="relative h-[650px]">
            <Image
              src="/sections/autonomous/main.jpg"
              fill
              className="h-full rounded-[30px] object-cover"
              alt="autonomous"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
