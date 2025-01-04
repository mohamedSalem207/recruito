import Image from "next/image";

type CandidateProps = {
  img: string;
  name: string;
  verified: boolean;
  job_title: string;
  skills: string[];
  classes?: string;
};

export default function Candidate({
  img,
  name,
  verified,
  job_title,
  skills,
  classes,
}: CandidateProps) {
  return (
    <div
      className={`w-full rounded-[20px] bg-white p-3 shadow-global lg:w-1/2 ${classes}`}
    >
      <div className="relative mb-3 flex flex-col items-center justify-center gap-1 border-b border-[#E6E8EC4F] pb-3 lg:mb-7 lg:pb-7">
        {verified && (
          <Image
            src="/globals/verified.svg"
            width={24}
            height={24}
            className="absolute start-[10px] top-[10px]"
            alt="verified"
            draggable={false}
          />
        )}

        <Image
          src={`/sections/benefits/${img}.png`}
          width={75}
          height={75}
          className="rounded-full object-cover"
          alt="candidate"
          draggable={false}
        />

        <h5 className="text-title lg:font-medium">{name}</h5>

        <p className="text-sm lg:text-base">{job_title}</p>
      </div>

      <div className="flex flex-wrap items-start justify-center gap-2.5">
        {skills.map((skill, i) => (
          <div className="rounded-[35px] bg-[#E6E8EC4F] px-3.5 py-2 text-sm text-text lg:text-base">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
