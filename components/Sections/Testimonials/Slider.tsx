"use client";

import Testimonial from "@/components/Cards/Testimonial";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type TestimonialsSliderProps = {
  data: Testimonial[];
};

const breakpoints = {
  0: {
    slidesPerView: 1.1,
  },
  992: {
    slidesPerView: 2,
  },
  1200: {
    slidesPerView: 3.1,
  },
};

export default function TestimonialsSlider({ data }: TestimonialsSliderProps) {
  return (
    <>
      <Swiper
        className="mySwiper"
        spaceBetween={10}
        breakpoints={breakpoints}
        modules={[Pagination, Autoplay]}
        pagination={{
          el: ".testimonials-swiper-pagination",
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          waitForTransition: true,
          pauseOnMouseEnter: true,
        }}
      >
        {data.map((testimonial, i) => (
          <SwiperSlide key={i}>
            <Testimonial {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination testimonials-swiper-pagination relative !bottom-auto mt-5 lg:mt-7 w-full" />
    </>
  );
}
