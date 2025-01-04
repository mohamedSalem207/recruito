import Image from "next/image";

type BenefitProps = {
  icon: string;
  title: string;
  desc: string;
};

export default function Benefit({ icon, title, desc }: BenefitProps) {
  return (
    <div className="flex flex-col items-center rounded-[10px] border border-second-border bg-[#152232] p-5 lg:p-7">
      <div className="flex size-[60px] items-center justify-center rounded-[10px] border border-second-border">
        <Image
          src={`/sections/benefits/${icon}.svg`}
          width={30}
          height={30}
          className="object-contain"
          alt="benefit-icon"
          draggable={false}
        />
      </div>

      <h5 className="my-5 font-semibold text-white lg:text-xl">{title}</h5>

      <p className="text-center text-sm text-border lg:w-3/4 lg:text-base">
        {desc}
      </p>
    </div>
  );
}
