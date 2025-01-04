import Btn from "@/components/Globals/Button";
import Image from "next/image";

export default function HomeContent() {
  return (
    <div className="flex flex-col items-center gap-3.5 pb-[100px] pt-[250px] lg:gap-8">
      <h2 className="relative text-center text-lg font-bold leading-[30px] lg:text-[54px] lg:!leading-[66px]">
        Revolutionize Your Hiring <br className="hidden lg:inline" /> Process
        with
        <br className="md:hidden" />
        <span className="bg-custom-gradient bg-clip-text text-transparent lg:ms-3">
          Recruito AI
        </span>
        <Image
          src="/globals/doubled-colored-vector.svg"
          width={25}
          height={25}
          className="absolute end-[27%] top-[45%] lg:-end-[12px] lg:bottom-[20px] lg:top-auto"
          draggable={false}
          alt="vector"
        />
      </h2>

      <p className="text-center text-sm text-title lg:text-base lg:font-medium">
        Your fully automated hiring assistant that sources, screens,
        <br className="hidden lg:inline" /> and interviews candidates
        effortlessly
      </p>

      <div className="flex w-full flex-col items-center justify-center gap-2 sm:flex-row lg:gap-5">
        <Btn text="Start Your Free Trial" transparent />

        <Btn text="Request A Demo" vector />
      </div>
    </div>
  );
}
