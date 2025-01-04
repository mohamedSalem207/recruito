import Image from "next/image";

export default function Testimonial({
  user: { img, name, job_title },
  text,
}: Testimonial) {
  return (
    <div className="rounded-[10px] border border-second-border p-3 lg:p-5">
      <div className="mb-3 flex items-center gap-2 lg:mb-7 lg:gap-3">
        <Image
          src={`/sections/testimonials/${img}.svg`}
          width={45}
          height={45}
          className="rounded-full object-contain"
          alt="testimonial-user"
          draggable={false}
        />

        <div className="space-y-0.5 text-sm lg:space-y-1 lg:text-base">
          <h5 className="text-title">{name}</h5>

          <h6 className="text-border">{job_title}</h6>
        </div>
      </div>

      <p className="px-3 text-sm text-text lg:px-5 lg:text-base">{text}</p>
    </div>
  );
}
