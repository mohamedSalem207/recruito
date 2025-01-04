import Image from "next/image";

type LineManagerProps = {
  img: string;
  name: string;
  number: number;
};

export default function LineManager({ img, name, number }: LineManagerProps) {
  return (
    <div className="flex items-center gap-3 bg-white">
      <Image
        src={`/sections/features/${img}.svg`}
        width={45}
        height={45}
        className={`relative ${number === 1 && "top-3"} ${number === 3 && "-top-3"}`}
        alt="manager"
        draggable={false}
      />

      <div
        className={`flex flex-grow items-center justify-between rounded-[10px] border border-second-border p-3 shadow-global ${number === 1 && "-rotate-[2deg]"} ${number === 3 && "rotate-[2deg]"}`}
      >
        <h5
          className="max-w-[70%] truncate font-medium text-[#848EA0] lg:text-lg"
          title={name}
        >
          {name}
        </h5>

        <div className="flex items-center gap-3">
          <h6 className="font-medium text-[#848EA0] line-through lg:text-lg">
            #{number}
          </h6>

          <div className="relative flex size-[36px] items-center justify-center">
            <div className="absolute h-full w-full rounded-full bg-white" />

            <svg className="absolute h-full w-full" viewBox="0 0 36 36">
              <circle
                className="text-gray-200"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                r="16"
                cx="18"
                cy="18"
              />

              <circle
                className="text-green-500"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="100"
                strokeDashoffset={100 - 89}
                strokeLinecap="round"
                fill="none"
                r="16"
                cx="18"
                cy="18"
                transform="rotate(-90 18 18)"
              />
            </svg>

            <span className="relative text-[10px] font-semibold text-border line-through">
              99%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
