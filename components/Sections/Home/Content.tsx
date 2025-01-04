import Button from "@/components/Globals/Button";
import Image from "next/image";

export default function HomeContent() {
  return (
    <div className="flex flex-col items-center pb-[100px] pt-[250px] lg:gap-8">
      <h2 className="relative text-center font-bold !leading-[66px] lg:text-[54px]">
        Revolutionize Your Hiring <br className="hidden lg:inline" /> Process
        with
        <span className="bg-custom-gradient bg-clip-text text-transparent lg:ms-3">
          Recruito AI
        </span>
        <Image
          src="/globals/doubled-colored-vector.svg"
          width={25}
          height={25}
          className="absolute -end-[12px] bottom-[20px]"
          draggable={false}
          alt="vector"
        />
      </h2>

      <p className="text-center text-title lg:font-medium">
        Your fully automated hiring assistant that sources, screens,
        <br className="hidden lg:inline" /> and interviews candidates
        effortlessly
      </p>

      <div className="flex items-center justify-center gap-3 lg:gap-5">
        <Button text="Start Your Free Trial" transparent />

        <Button text="Request A Demo" vector />
      </div>
    </div>
  );
}
