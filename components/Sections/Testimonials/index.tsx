import RoundedTitle from "@/components/Globals/RoundedTitle";
import TestimonialsSlider from "./Slider";

const testimonials = [
  {
    user: {
      img: "user-1",
      name: "Alex Martin",
      job_title: "Company.HR",
    },
    text: "Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito",
  },
  {
    user: {
      img: "user-2",
      name: "Alex Martin",
      job_title: "Company.HR",
    },
    text: "Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito",
  },
  {
    user: {
      img: "user-1",
      name: "Alex Martin",
      job_title: "Company.HR",
    },
    text: "Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito",
  },
  {
    user: {
      img: "user-1",
      name: "Alex Martin",
      job_title: "Company.HR",
    },
    text: "Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito",
  },
  {
    user: {
      img: "user-2",
      name: "Alex Martin",
      job_title: "Company.HR",
    },
    text: "Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito",
  },
  {
    user: {
      img: "user-1",
      name: "Alex Martin",
      job_title: "Company.HR",
    },
    text: "Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20">
      <RoundedTitle title="Testimonials" />

      <p className="mb-5 text-center font-semibold lg:mb-7 lg:text-[27px]">
        Don’t just take our word for it—see
        <br className="hidden lg:inline" /> what our clients say about Recruito
        AI.
      </p>

      <TestimonialsSlider data={testimonials} />
    </section>
  );
}
