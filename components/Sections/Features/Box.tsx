import Image from "next/image";

type FeatureBoxProps = {
  children: React.ReactNode;
  classes?: string;
  start?: boolean;
};

export default function FeatureBox({
  children,
  classes,
  start,
}: FeatureBoxProps) {
  return (
    <div
      className={`relative rounded-[20px] border border-second-border ${classes} bg-white`}
    >
      <Image
        src="/globals/feature-pattern.svg"
        className={`absolute top-0 object-cover ${start ? "start-0" : "end-0"}`}
        width={250}
        height={250}
        alt="pattern"
        draggable={false}
      />

      {children}
    </div>
  );
}
