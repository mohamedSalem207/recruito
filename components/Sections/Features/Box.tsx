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
      className={`border-second-border relative rounded-[20px] border ${classes}`}
    >
      <Image
        src="/globals/feature-pattern.png"
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
