import Image from "next/image";

type CardProps = {
  img: string;
};

export default function Card({ img }: CardProps) {
  return (
    <div className="border-second-border shadow-global relative flex w-full items-center gap-3 rounded-[10px] border bg-white p-2.5 lg:gap-5">
      <div className="border-second-border flex size-[50px] items-center justify-center rounded-[10px] border p-2">
        <Image
          src={`/sections/features/cards/${img}.svg`}
          width={30}
          height={30}
          alt="card-image"
          draggable={false}
        />
      </div>

      <div className="w-full space-y-1.5">
        <div className="h-5 w-[80%] rounded-[20px] bg-[#E6E8EC4D]" />

        <div className="rounded-[20px] h-[14px] w-1/2 bg-[#E6E8EC4D]" />

        <div className="rounded-[20px] h-[14px] w-1/2 bg-[#E6E8EC4D]" />
      </div>
    </div>
  );
}
