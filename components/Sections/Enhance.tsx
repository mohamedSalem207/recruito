import Image from "next/image";
import Btn from "../Globals/Button";

export default function Enhance() {
  return (
    <section className="relative flex items-center justify-center py-10 lg:py-24">
      <Image
        src="/sections/enhance/right.jpg"
        height={300}
        width={300}
        className="absolute end-0"
        alt="right-pattern"
        draggable={false}
      />

      <Image
        src="/sections/enhance/left.jpg"
        height={300}
        width={300}
        className="absolute start-0"
        alt="left-pattern"
        draggable={false}
      />

      <div className="container">
        <div className="flex flex-col items-center justify-center gap-3 lg:gap-5">
          <div className="size-[114px] rounded-full bg-[url('/sections/enhance/circle.svg')] p-3 lg:p-5">
            <div className="relative flex size-full items-center justify-center rounded-full bg-custom-gradient p-3 lg:p-5">
              <Image
                src="/sections/enhance/icon.svg"
                width={40}
                height={40}
                alt="enhance-icon"
                draggable={false}
              />
            </div>
          </div>

          <p className="relative text-center font-semibold lg:text-[27px]">
            Ready to enhance your <br className="hidden lg:inline" />
            hiring process ?
          </p>

          <div className="relative">
            <Btn text="Request A Demo" vector />
          </div>
        </div>
      </div>
    </section>
  );
}
