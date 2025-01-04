import Image from "next/image";
import RoundedTitle from "../Globals/RoundedTitle";
import Benefit from "../Cards/Benefit";

const benefits = [
  {
    icon: "automate",
    title: "Automate Processes",
    desc: "Let Recruito handle resume screening, scheduling, and interviews so you can focus on strategic decisions.",
  },
  {
    icon: "instant-information",
    title: "Provide Instant Information",
    desc: "Quickly access relevant candidate data, ensuring no talent is overlooked in your search.",
  },
  {
    icon: "data-driven",
    title: "Make Data-Driven Decisions",
    desc: "Utilize analytics to rank candidates based on key metrics, providing unbiased recommendations for your hiring team.",
  },
];

export default function Benefits() {
  return (
    <section className="relative bg-title py-10 lg:py-20">
      <Image
        src="/sections/benefits/left.svg"
        className="absolute bottom-0 start-0 -top-[70px] rotate-180 lg:top-auto lg:rotate-0"
        width={400}
        height={400}
        alt="benefit"
        draggable={false}
      />

      <Image
        src="/sections/benefits/right.svg"
        className="absolute -bottom-[70px] end-0 lg:bottom-0"
        width={400}
        height={400}
        alt="benefit"
        draggable={false}
      />

      <div className="container">
        <RoundedTitle title="Benefits" />

        <p className="mb-5 text-center font-semibold text-white lg:mb-7 lg:text-[27px]">
          Unlock the advantages of using <br className="hidden lg:inline" />
          Recruito AI for your hiring needs.
        </p>

        <div className="md:grid-col-2 grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-5">
          {benefits.map((benefit, i) => (
            <Benefit key={i} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
