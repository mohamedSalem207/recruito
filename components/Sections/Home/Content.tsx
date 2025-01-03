import Button from "@/components/Globals/Button";

export default function HomeContent() {
  return (
    <div className="flex flex-col items-center pb-[100px] pt-[250px] lg:gap-8">
      <h2 className="text-center font-bold !leading-[66px] lg:text-[54px]">
        Revolutionize Your Hiring <br className="hidden lg:inline" /> Process
        with
        <span className="bg-custom-gradient bg-clip-text text-transparent lg:ms-3">
          Recruito AI
        </span>
      </h2>

      <p className="text-center text-title lg:font-medium">
        Your fully automated hiring assistant that sources, screens,
        <br className="hidden lg:inline" /> and interviews candidates
        effortlessly
      </p>

      <div className="flex items-center justify-center gap-3 lg:gap-5">
        <Button text="Start Your Free Trial" transparent />

        <Button text="Request A Demo" />
      </div>
    </div>
  );
}
