import Image from "next/image";

export default function Testimonial({
  user: { img, name, job_title },
  text,
}: Testimonial) {
  return (
    <div className="rounded-[10px] border border-second-border p-3 lg:p-5">
      <div className="mb-5 flex items-center gap-3 lg:mb-7">
        <Image
          src={`/sections/testimonials/${img}.svg`}
          width={45}
          height={45}
          className="rounded-full object-contain"
          alt="testimonial-user"
          draggable={false}
        />

        <div className="space-y-1">
          <h5 className="text-title">{name}</h5>

          <h6 className="text-border">{job_title}</h6>
        </div>
      </div>

      <p className="px-3 text-text lg:px-5">{text}</p>
    </div>
  );
}
