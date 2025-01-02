type BtnProps = {
  type?: "button" | "submit";
  text: string;
  children?: React.ReactNode;
  transparent?: boolean;
};

export default function Button({
  type,
  text,
  children,
  transparent,
}: BtnProps) {
  return (
    <button
      type={type || "button"}
      className={`h-[45px] rounded-[30px] border ${transparent ? "border-border bg-transparent" : "bg-gradient-to-r from-[#1F67E7] to-[#1AD7BE] shadow-[0_0_0_3px_#1BD1C21A]"} px-9`}
    >
      <div className="flex items-center justify-center">
        <span
          className={`font-semibold ${transparent ? "text-title" : "text-white"}`}
        >
          {text}
        </span>

        {children}
      </div>
    </button>
  );
}
