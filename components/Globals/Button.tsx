import Image from "next/image";

type BtnProps = {
  type?: "button" | "submit";
  text: string;
  transparent?: boolean;
  vector?: boolean;
};

export default function Button({ type, text, transparent, vector }: BtnProps) {
  return (
    <button
      type={type || "button"}
      className={`h-[45px] rounded-[30px] border ${transparent ? "border-border bg-transparent" : "bg-gradient-to-r from-[#1F67E7] to-[#1AD7BE] shadow-[0_0_0_3px_#1BD1C21A]"} px-7`}
    >
      <div className="flex items-center justify-center gap-2">
        {vector && (
          <Image
            src="/globals/vector.svg"
            width={15}
            height={15}
            alt="vector"
            draggable={false}
          />
        )}

        <span
          className={`font-semibold ${transparent ? "text-title" : "text-white"}`}
        >
          {text}
        </span>
      </div>
    </button>
  );
}
